const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  medico: { type: String, required: true },
  especialidad: { type: String, required: true },
  fecha: { type: String, required: true },
  paciente: { type: String, required: true },
  estado: { type: String, required: true, default: 'pendiente' },
});

module.exports = mongoose.model('Cita', CitaSchema);