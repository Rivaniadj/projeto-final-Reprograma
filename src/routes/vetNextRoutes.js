const express = require('express')
const router = express.Router()
const controller = require('../controllers/vetNextController')


router.get('/', controller.getAll);


router.get("/vetNext/categoria", controller.getCategoria);

//router.get('/bairro', controller.getByBairro);

//criar um novo hospital/post/save
router.post('/', controller.createVetNext);

router.get("/:id", controller.getId);
router.delete("/:id", controller.deletaVetNext);
// //atualizar uma informacao especifica num estudio/patch/findById/save
router.put("/:id", controller.replacevetNext);
module.exports = router