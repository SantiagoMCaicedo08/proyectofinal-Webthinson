const express = require('express');
const router = express.Router();
const TipoDocumento = require('../models/TipoDocumento');

// Crear un nuevo tipo de documento
router.post('/', async (req, res) => {
    try {
        const tipoDocumento = new TipoDocumento(req.body);
        await tipoDocumento.save();
        res.status(201).json(tipoDocumento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los tipos de documentos
router.get('/', async (req, res) => {
    try {
        const tiposDocumentos = await TipoDocumento.find();
        res.status(200).json(tiposDocumentos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener un tipo de documento por ID
router.get('/:id', async (req, res) => {
    try {
        const tipoDocumento = await TipoDocumento.findById(req.params.id);
        res.status(200).json(tipoDocumento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar un tipo de documento por ID
router.put('/:id', async (req, res) => {
    try {
        const tipoDocumento = await TipoDocumento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(tipoDocumento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un tipo de documento por ID
router.delete('/:id', async (req, res) => {
    try {
        await TipoDocumento.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Tipo de documento eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
