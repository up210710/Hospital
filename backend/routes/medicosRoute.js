const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.get('/', medicoController.getAll);
router.post('/', medicoController.create);

module.exports = router;