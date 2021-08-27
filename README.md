## Turma Online 12 | Back-end | 2021 | Semana 15: Autenticação e Segurança
### Vamos preparar o ambiente!

Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm. Será necessário ter instalado o banco de dados Mongodb e suas configurações. Além disso, iremos fazer requisições na API com a plataforma Postman.

Após clonar o projeto, execute o comando abaixo:

- `$ npm install`

## Autenticação

-------------------------------

Este projeto já possui rotas organizadas e integração com o banco de dados, conforme aula desenvolvida na s14. O próximo passo agora é criar o processo de autenticação.

Segue as orientações:

### Criar rota autenticada

1. Instalar "jsonwebtoken" via npm install
`$ npm install jsonwebtoken`

2. Gerar chave pelo https://travistidwell.com/jsencrypt/demo/ e guardar a chave pública

3. Instalar dotenv-safe
`$ npm install dotenv-safe`

4. Criar arquivo .env.example e .env, ambos com chave chamada SECRET
`$ SECRET=chave_rsa_aqui_sem_aspas`

5. Carregar as variáveis de ambiente no projeto, no arquivo server.js
`$ require('dotenv-safe').config();`

6. Depois disso, vamos recriar a String de conexão do localhost, iremos proteger nosso http://localhost... criando uma variável de ambiente chamada MONGODB_URL, que ficará dentro do arquivo `.env`.

Dentro do arquivo `.env`ficará:

```SECRET=chave_rsa_aqui_sem_aspas
   MONGODB_URL= "mongodb://localhost:27017/reprograma"
```

Na String de conexão no arquivo database.js, ficará:

```//String de conexão
mongoose.connect(process.env.MONGODB_URL,  {
     useNewUrlParser: true,
     useUnifiedTopology: true
});
```

7. Criar variável contendo a SECRET em estudioController.js
`$ const secret = process.env.SECRET`

8. Criar método de autenticação em `getAll`

9. Pegar o header de autorização e enviar uma mensagem de erro 401 quando vir vazio
`$ const authHeader = request.get('authorization');`

```
const getAll = async (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Erro no header")
  }

  const estudios = await Estudio.find()
  res.status(200).send(estudios)
}
```

10. Passar bearer token no header de autenticação via Postman
`$ Bearer TOKEN_JWT_AQUI`

11. Verificar token JWT e enviar uma mensagem de erro 403 caso seja inválido
`$ jwt.verify(token, SECRET, (error) => {...});`

Antes de tudo, precisamos importar a biblioteca jwt no controller 
`$ const jwt = require('jsonwebtoken');`

Agora sim, podemos aplicar o método verify e verificar se tudo está pegando corretamente. 
Vamos lá!
```
  jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado');
    }
```
-----------------------------------------------------------------------------------------------
### Criar rota para criar usuárias

1. Criar rota para criar usuária em usuariasRoute.js
`$ router.post('/', controller.create);`

2. Criar model de usuarias com id, nome, email e senha

3. Criar método no controller para criar usuaria

4. Criar uma usuaria de teste via Postman

-----------------------------------------------------------------------------------------------
### Criptografar senha das usuárias

1. Instalar bcrypt
`$ npm install bcrypt`

2. Fazer require do bcrypt no `usuariasController.js`
`$ const bcrypt = require('bcryptjs');`

3. Gerar hash com senha recebida no body da request
`$ bcrypt.hashSync(request.body.senha, 10);`

4. Criar nova usuária no banco com a senha hasherizada e o login (email) recebido no body da request

-----------------------------------------------------------------------------------------------
### Criar rota de login

1. Criar rota de login em `usuariasRoute.js`
`$ router.post('/login', controller.login);`

2. Buscar usuária a partir do email recebido na request, e mostrar um erro 404 caso não encontre
`$ Usuarias.findOne({ email: req.body.email }, function(error, usuaria) {...}`

3. Comparar senha de usuária encontra com a senha recebida via request, e mostrar um erro 401 caso seja diferente
`$ bcrypt.compareSync(request.body.senha, usuariaEncontrada.senha);`

4. Fazer require do plugin JWT
`$ const jwt = require('jsonwebtoken');`

5. Importar SECRET e gerar token JWT a partir do nome e secret e devolver na request
`$ jwt.sign({ name: usuaria.name }, SECRET);`

6. Bater na rota `getAll` via Postman com o token gerado
