const express = require('express')
const router = express.Router()
const controller = require('../controllers/vetNextExoticController')

router.get('/', controller.getAll);
router.get("/especialidade/:especialidade", controller.getEspecialidade);
router.post('/', controller.createVetNextExotic);
router.get("/:id", controller.getId);

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})


module.exports = router