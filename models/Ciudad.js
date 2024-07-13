// models/Ciudad.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String }
});

module.exports = mongoose.model('Ciudad', ciudadSchema);
