const mongoose = require('mongoose')
const  VetNext  = require('../models/VetNext')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


//ok
const getId = async (req, res) => {
    const getVetNextById = await VetNext.findById(req.params.id)
    VetNext.findOne({ id: req.params.id },
        function (err) {
            if (err) {
                res.status(500).json({ message: err.message })
            } else {
                res.status(200).json(getVetNextById)
            }
        })
};



const getAll = (req, res) => {
    VetNext.find((err, vetnext) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        };
        return res.status(200).send(vetnext);
    });
};




//OK
const createVetNext = async (req, res) => {

    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(403).send({ message: "onde esta o token" })
    }

    jwt.verify(token, SECRET, async (err) => {
        if (err) {
            res.status(403).send({ message: 'Token não válido', err })
        }

        const vetNext = new VetNext({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            categoria: req.body.categoria,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cirurgia_Mensal: req.body.cirurgia_Mensal,

        })


        try {
            const novoVetNext = await vetNext.save()
            res.status(201).json(novoVetNext)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    })

}

//OK

const deletaVetNext = async (req, res) => {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]


    if (!token) {
        return res.status(403).send({ message: "onde esta o token" })
    }

    jwt.verify(token, SECRET, async (err) => {
        if (err) {
            res.status(403).send({ message: 'Token não válido', err })
        }

        const encontraVetNext = await VetNext.findById(req.params.id)
        if (encontraVetNext == null) {
            return res.status(404).json({ message: 'hospital não foi encontrado.' })
        }

        try {
            await encontraVetNext.remove()
            res.status(200).json({ message: 'hospital deletado com sucesso' })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    })

}

// const getByBairro = (req, res) => {
//     const requestedBairro = request.query.bairro.toLowerCase()
//     const filteredBairro = VetNext.find(vetnext => vetnext.bairro.tolowerCase().includes(requestedBairro))
//           console.log(filteredBairro)

//           if (requestedBairro === "" || filteredBairro === undefined) {
//               res.status(404).send({
//                   "message": "Por favor, insira um bairro válido."
//               })
//           } else {
//               response.status(200).send(filteredBairro)
//           }
//       };



const getCategoria = (req, res) => {
    const { categoria } = req.query;
    VetNext.find({ categoria: categoria })
    .then((list) => {
        if (!list.length > 0) { return res.status(200).json({ message: `Não foi encontrada nenhum hospital com esta categoria. Tente novamente!` }) }
        res.status(200).json(list)
    })
        .then((VetNext) => { res.status(200).json(VetNext) })
        
}

   

const replacevetNext = (req, res) => {

    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(403).send({ message: "onde esta o token" })
    }

    jwt.verify(token, SECRET, async (err) => {
        if (err) {
            res.status(403).send({ message: 'Token não válido', err })
        }

        const id = req.params.id;
        const vetNextFromBody = req.body;

        VetNext.findByIdAndUpdate(id, vetNextFromBody, { new: true }, (err, vetnext) => {
            if (err) {
                return res.status(424).send({ message: err.message });
            } else if(!vetnext) {

                return res.status(404).send("Registro não encontrado");
            }else{return res.status(200).send(vetnext)}


        });
    });
};










module.exports = {
    getId,
    getAll,
   // getByBairro,
    createVetNext,
    deletaVetNext,
    getCategoria,
    replacevetNext,
}
