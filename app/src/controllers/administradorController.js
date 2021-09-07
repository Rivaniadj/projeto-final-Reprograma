const Administrador = require('../models/administrador')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = async (req, res) => {
  // objetivo: criar uma novo usuário
  // acessar os dados da usuária enviado no body
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const administrador = new Administrador(req.body)
  try {
    const novoAdministrador = await administrador.save()
    res.status(201).json(novoAdministrador)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
const login = (req, res) => {
  Administrador.findOne({ email: req.body.email }, (err, administradorEncontrado) => {
    if (!administradorEncontrado) {
      return res.status(404).send({ message: 'administrador nao encontrado', email: '${req.body.email}' })
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, administradorEncontrado.senha)

    if (!senhaValida) {
      return res.status(401).send({ message: 'Login nao autorizado' })
    }

    const token = jwt.sign({ email: req.body.email }, SECRET)
    res.status(200).send({ messagem: 'Login realizado com sucesso', token: token })
  })
}


module.exports = { create, login }