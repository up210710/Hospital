const Medico = require('../models/Medico');

exports.getAll = async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { nombre, especialidad, horario } = req.body;
    if (!nombre || !especialidad || !horario) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const medico = new Medico(req.body);
    await medico.save();
    res.status(201).json(medico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};