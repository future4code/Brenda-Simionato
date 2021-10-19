// import express, { Request, Response } from 'express';
// import cors from 'cors'
// import connection from './connection';


// const app = express();

// app.use(express.json());
// app.use(cors());

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000!')
// })


/* Aula 56 - Criptografia e User Roles 

Exercícios de Tarde:

Exercício 1: 

Resposta:

A - Round retorna um valor decimal, arredondando de acordo com o número de casas decimais especificadas na função. Um salt é, basicamente, uma cadeia de caracteres aleatória concatenada com uma senha, passphrase ou arquivo antes de efetuar uma operação de hash.

B,C - import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }


  -------------------------- // ------------------------


  Exercício 2:

  Resposta:

  A - Cadastro. Pois, se for feita alteração no login e realizar os testes, não irá funcionar pois o mesmo irá comparar com a senha do cadastro, onde a senha ainda não está criptografada.
  
  B - app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
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


C - app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const comapreResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id    
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


D - Sim, se for realizada a adição da criptografia, automaticamente o user deve ser modificado.

  

-------------------------- // -----------------------


Exercício 3:

Resposta:

A - ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal"

B - import * as jwt from "jsonwebtoken";


  cont expiresIn = "1min";
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

 const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }


type AuthenticationData {
  id: string;
  role: string;
}

C - app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
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


D - app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
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


------------------- // ----------------------


Exercício 4:

Resposta: 

A - app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});*/