const mongoose = require('mongoose');

const MedicoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  horario: { type: String, required: true }
});

module.exports = mongoose.model('Medico', MedicoSchema);