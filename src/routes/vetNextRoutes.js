const express = require('express')
const router = express.Router()
const controller = require('../controllers/vetNextController')


router.get('/', controller.getAll);

router.get("/categoria", controller.getCategoria);

router.get('/bairro', controller.getBairro);

router.get('/cidade', controller.getCidade);

router.post('/', controller.createVetNext);

router.get("/:id", controller.getId);

router.delete("/:id", controller.deletaVetNext);

router.put("/:id", controller.replacevetNext);
s

module.exports = router