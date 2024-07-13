// models/TipoDocumento.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoDocumentoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String }
});

module.exports = mongoose.model('TipoDocumento', tipoDocumentoSchema);
