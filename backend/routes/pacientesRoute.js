const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post('/register', pacienteController.register);
router.post('/login', pacienteController.login);

module.exports = router;