                PROJETO FINAL 
               {REPROGRAMA}-  VETNEXT/VETNEXtEXOTIC





               OBJETIVO DO PROJETO VetNext


     Devido a necessidade e dificuldade que tive de achar informações de Hopitais Veterinário pensei nesse projeto VetNext, que tem por objetivo auxiliar de uma forma fácil e rápido a busca 
     de hospitais \Veterinário/ \Emergência e urgência./,  e também hospitais para animais exóticos, que algumas pessoas  tem como animais de estimação, neles poderão encontrar informações necessárias.

     nosso projeto é CRUD completo integrado no banco de dados, onde será possivel listar todos hospitais, cadastrados no baco de dados.

     Como será aplicado?
     
     Os donos dos Pets ou animais exóticos poderão acessar a lista dos hospitais de forma livres, 
     porém, só poderá cadastrar algum do seu interesse criando um token, caso o mesmo n estiver correto receberá uma mensagem de erro. 

     
     TECNOLOGIA E DEPENDÊNCIAS USADAS PARA CONSTRUCÃO DA API

Visual Studio Code;
Git e Github;
Postman
Nodemon;
MongoDB;
Mongoose;
   bcrypt: ^5.0.1
    cors: ^2.8.5
    dotenv: ^10.0.0
    dotenv-safe: ^8.2.0
    express: ^4.17.1"
    jsonwebtoken: ^8.5.1
    mongoose: ^5.13.5
    nodemon: ^2.0.12
    
                
Estrutura

├── src
│   ├── controllers
|   |  ├── administradorController.js
|   |  ├── vetNextController.js
|   |  ├── vetNextExoticController.js
    |__data
        | __database|
│   ├── models
|   |  ├── administrador.js
|   |  ├── VetNext.js
       |__ vetNextExotic.js
│   ├── routes 
│   |  ├── administradorRoutes.js
|   |  ├── vetNextExoticRoutes.js
|   |  ├── vetNextRoutes.js 
|   ├── .env
├── .env.example
|__ package-lock.json
├── package.json
├── server.js


USAMOS SEGUINTES ROTAS PARA MANIPULAÇÃO VETNEXT:

Método HTTP       EndPoint            Descrição

 POST                `/`                 Criar novo VetNext
 GET                  `/`                   Retorna todos VetNext
 GET                 /:Id                Lista VetNext por ID
 GET                 /categoria          LIsta VetNext por Categoria
 GET                 /bairro             Lista VetNext por Bairro
 GET                 /cidade             Lista VetNext por Cidade
 PUT                 /:Id                Atualiza informações de um VetNext
 DELETE              /:Id                Remove VetNext específico


USAMOS SEGUINTES ROTAS PARA MANIPULAÇÃO VETNEXTEXOTIC:


Método HTTP       EndPoint             Descrição

POST                 /                  Criar novo VetNextExotic

GET                  /                  Retorna todos VetNextExotic

GET                 /:Id                Busca VetNextExotic por ID

GET                 /especialidade      Retorna VetnextExotic espeialidade escolhidas


USAMOS SEGUINTES ROTAS PARA MANIPULAÇÃO ADMINISTRADOR:

POST                /create               cria o administrador

POST                /create               criar login do administrador


ALGUMAS ROTAS DO CRUD USADA NO POSTMAN [VETNEXT]

ROTA PARA LISTAR VETNEXT
[GET] http://localhost:3333/vetNext/

ROTA PARA BUSCAR POR BAIRRO
[GET] http://localhost:3333/vetNext/bairro?bairro=Cordeiro

ROTA PARA PARA BUSCAR POR CATEGORIA 
[GET] http://localhost:3333/vetNext/categoria?categoria=privado

ATUALIZAR VETNEXT PELO ID 
[GET] http://localhost:3333/vetNext/612c0e0b2dc09c31ccc384ef


ALGUMAS ROTAS DO CRUD USADA NO POSTMAN [VETNEXTEXOTIC]

ROTA PARA LISTAR VETNEXTEXOTIC
[GET] http://localhost:3333/vetnextExotic

ROTA PARA PARA BUSCAR POR ESPECIALIDADE [REPTEIS]
[GET]http://localhost:3333/vetNextExotic/?especialidade=repteis


ROTA PARA CRIAR ADMINISTRADOR
[POST] http://localhost:3333/administrador/create [SENHA]

"_id": "6132992a02d9e822ece5a99b",
    "nome": "Riva",
    "email": "gato@tmail",
    "senha": "$2b$10$rf9AqeQ6KztBbYZ.NcMAg.aNIgq1Ly9ax1QrwsAovvrWmP2mUCPpG",
    "__v": 0


 ROTA PARA CRIAR [LOGIN] DO ADM
[POST] http://localhost:3333/administrador/create 

{
    "messagem": "Login realizado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdG9AdG1haWwiLCJpYXQiOjE2MzA3MDQwMzR9.p0vec3g0fZiJacA9U3Kfcu9Wr_BV5ucKPCOgKncIr18"
}



