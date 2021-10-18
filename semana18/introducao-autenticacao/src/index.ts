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

