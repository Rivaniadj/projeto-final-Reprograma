const mongoose = require('mongoose')

const vetNextSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true,
  },
  valorConsulta: {
    type: String,
    required: true,
  },
    endereco: {
    type: String,
    required: true,   
  },
  telefone: {
    type: String,
    required: true
  },
  cirurgia_Mensal: {
    type: String,
    required: true,
   
  },


})

module.exports = mongoose.model('vetnext', vetNextSchema);
//module.exports = { 

  //VetNext
//};//const VetNext
 