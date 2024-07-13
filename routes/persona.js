const express = require('express');
const router = express.Router();
const Persona = require('../models/Persona');

// Crear una nueva persona
router.post('/', async (req, res) => {
    try {
        const persona = new Persona(req.body);
        await persona.save();
        res.status(201).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las personas
router.get('/', async (req, res) => {
    try {
        const personas = await Persona.find().populate('tipoDocumento').populate('lugarResidencia');
        res.status(200).json(personas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener una persona por ID
router.get('/:id', async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id).populate('tipoDocumento').populate('lugarResidencia');
        res.status(200).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una persona por ID
router.put('/:id', async (req, res) => {
    try {
        const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una persona 
router.delete('/:id', async (req, res) => {
    try {
        await Persona.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Persona eliminada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
