// models/Persona.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    tipoDocumento: { type: Schema.Types.ObjectId, ref: 'TipoDocumento', required: true },
    documento: { type: String, required: true, unique: true },
    lugarResidencia: { type: Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    fechaNacimiento: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String },
    usuario: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Persona', personaSchema);
