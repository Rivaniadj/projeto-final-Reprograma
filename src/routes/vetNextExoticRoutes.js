const express = require('express')
const router = express.Router()
const controller = require('../controllers/vetNextExoticController')

router.get('/', controller.getAll);
router.get("/especialidade/:especialidade", controller.getEspecialidade);
router.post('/', controller.createVetNextExotic);
router.get("/:id", controller.getId);

module.exports = router