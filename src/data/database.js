const mongoose = require('mongoose')

require("dotenv").config();

const MONGODB = process.env.MONGODB_URI ||'mongodb://localhost:27017/hospital-db' 

const connect = () => {mongoose.connect(
  MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }