const express = require('express')
const app = express()
const cors = require("cors")
require('dotenv-safe').config()


//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(cors())

//usar as rotas
app.use(express.json())


const administradorRouter = require('./src/routes/administradorRoutes')
app.use('/administrador', administradorRouter)

const vetNextRouter = require('./src/routes/vetNextRoutes')
app.use('/vetnext', vetNextRouter)

const vetNextExoticRouter = require('./src/routes/vetNextExoticRoutes')
app.use('/vetnextexotic', vetNextExoticRouter)

app.listen(3333, () => console.log('listening on port 3333'))

