// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api/medicos', require('./routes/medicosRoute'));
app.use('/api/pacientes', require('./routes/pacientesRoute'));
app.use('/api/citas', require('./routes/citasRoute'));

app.use('/img', express.static(__dirname + '/../Frontend/img'));

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));

module.exports = app;