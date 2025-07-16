const Paciente = require('../models/Paciente');
const bcrypt = require('bcrypt');

// Registrar paciente
exports.register = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;
    if (!nombre || !correo || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const existe = await Paciente.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }
    const hash = await bcrypt.hash(password, 10);
    const paciente = new Paciente({ nombre, correo, password: hash });
    await paciente.save();
    res.status(201).json({ nombre: paciente.nombre, correo: paciente.correo, id: paciente._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login paciente (básico)
exports.login = async (req, res) => {
  const { correo, password } = req.body;
  const paciente = await Paciente.findOne({ correo });
  if (paciente && await bcrypt.compare(password, paciente.password)) {
    res.json({ nombre: paciente.nombre, correo: paciente.correo, id: paciente._id });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
};