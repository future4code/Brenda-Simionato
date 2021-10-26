/* Aula 55 - Introdução à Autenticação:

Autenticação de Usuário - Id:

import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);


 ------------------------ // -------------------------


Exercícios para tarde:

Respostas:

Exercício 1:

A - Não é uma boa prática utilizar strings para representar id, pois, por exemplo, em casos de banco relacional, o id deve ser único e de auto incremento, sendo número uma forma mais simples.

B - Criado arquivo generateId dentro da pasta Services.


------------------ // -------------------

Exercício 2:

A - No código acima foi criado uma conexão com o banco de dados através do Knex, criado também uma função de criar usuário onde, id, email e senha deverão necessariamente ser strings.

B - CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

C - Deve ser realizado as funções dentro da pasta data, para salvar usuários no banco.


----------------- // ------------------

Exercício 3:

A - Declara que o token gerado deverá necessariamente ser uma string e uma chave secreta.

B - Dentro da pasta service, as seguintes funções:

import * as jwt from "jsonwebtoken";

  const expiresIn = "1min";
  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
}

type AuthenticationData = {
  id: string;
}


--------------------- // ------------------

Exercício 4:

app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();


    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

------------------- // -----------------


Exercício 5:

const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}


---------------- // ------------------


Exercício 6:

app.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }


    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
})


------------------ // -----------------


Exercício 7:

A - Indica que somente poderá ser uma string.

B - import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};


-------------------- // ----------------


Exercício 8:

A -  public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
}

B - app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;


    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});*/