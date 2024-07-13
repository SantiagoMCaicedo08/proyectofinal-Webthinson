const express = require('express');
const router = express.Router();
const Ciudad = require('../models/Ciudad');

// Crear una nueva ciudad
router.post('/', async (req, res) => {
    try {
        const ciudad = new Ciudad(req.body);
        await ciudad.save();
        res.status(201).json(ciudad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las ciudades
router.get('/', async (req, res) => {
    try {
        const ciudades = await Ciudad.find();
        res.status(200).json(ciudades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener una ciudad por ID
router.get('/:id', async (req, res) => {
    try {
        const ciudad = await Ciudad.findById(req.params.id);
        res.status(200).json(ciudad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una ciudad por ID
router.put('/:id', async (req, res) => {
    try {
        const ciudad = await Ciudad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(ciudad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una ciudad por ID
router.delete('/:id', async (req, res) => {
    try {
        await Ciudad.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Ciudad eliminada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
