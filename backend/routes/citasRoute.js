const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.get('/', citaController.getAll);
router.post('/', citaController.create);
router.delete('/:id', citaController.delete);

module.exports = router;