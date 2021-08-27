const express = require('express')
const app = express()

require('dotenv-safe').config()


//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(express.json())


const administradorRouter = require('./src/routes/administradorRoutes')
app.use('/administrador', administradorRouter)

const vetNextRouter = require('./src/routes/vetNextRoutes')
app.use('/vetnext', vetNextRouter)


app.listen(3333, () => console.log('listening on port 3333'))

