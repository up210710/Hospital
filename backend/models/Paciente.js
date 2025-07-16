const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  direccion: { type: String }
});

module.exports = mongoose.model('Paciente', PacienteSchema);