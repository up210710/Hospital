const Cita = require('../models/Cita');

// Obtener todas las citas
exports.getAll = async (req, res) => {
  const citas = await Cita.find();
  res.json(citas);
};

// Crear nueva cita
exports.create = async (req, res) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.status(201).json(cita);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar cita por ID
exports.delete = async (req, res) => {
  try {
    await Cita.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cita cancelada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};