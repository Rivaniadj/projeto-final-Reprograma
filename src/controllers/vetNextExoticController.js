const mongoose = require('mongoose')
const VetNextExotic = require("../models/VetNextExotic")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


//ok
const getId = async (req, res) => {
    const getVetNextExoticById = await VetNextExotic.findById(req.params.id)
    VetNextExotic.findOne({ id: req.params.id },
        function (err) {
            if (err) {
                res.status(500).json({ message: err.message })
            } else {
                res.status(200).json(getVetNextExoticById)
            }
        })
};

const getAll = async(req, res) =>{
    const exotic = await VetNextExotic.find()
    res.status(200).json(exotic )
}




// const getAll = (req, res) => {
//     console.log(VetNextExotic.find())
//     // VetNextExotic.find((err, vetnextExotic) => {
//     //     if (err) {
//     //         return res.status(500).send({ message: err.message });
//     //     };
//     //     return res.status(200).send(vetnextExotic);
//     // });
//     res.json(VetNextExotic.find())
// };




//OK
const createVetNextExotic = async (req, res) => {

    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(403).send({ message: "onde esta o token" })
    }

    jwt.verify(token, SECRET, async (err) => {
        if (err) {
            res.status(403).send({ message: 'Token não válido', err })
        }

        const vetNextExotic = new VetNextExotic({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            categoria: req.body.categoria,
            especialidade: req.body.especialidade,
            valorConsulta: req.body.valorConsulta,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cirurgia_Mensal: req.body.cirurgia_Mensal,
            criadoEm: new Date,
        })


        try {
            const novoVetNextExotic = await vetNextExotic.save()
            res.status(201).json(novoVetNextExotic)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    })

}


const getEspecialidade = (req, res) => {

    const { especialidade } = req.params
    
    VetNextExotic.find({especialidade : especialidade} )
        .then((list)=> {
    
            if(!list.length > 0) return res.status(404).send({"message": "Especialidade não encontrada, tente novamente!"})
        return res.status(200).send(list)
    })


      
      
      
    
    }







// const getEspecialidade = (req, res) => {
//     const { especialidade } = req.query;
//     VetNextExotic.find({ especialidade: especialidade })
//         .then((list) => {
//             if (!list.length > 0) { return res.status(200).json({ message: `Não foi encontrad nenhum hospital com essa especialidade. Tente novamente!` }) }
//             res.status(200).json(list)
//         })
//         .then((VetNextExotic) => { res.status(200).json(VetNextExotic) })

//     }



module.exports = { getId, getAll, createVetNextExotic, getEspecialidade}