const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/taller_final', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Rutas
const personaRoutes = require('./routes/persona');
const tipoDocumentoRoutes = require('./routes/TipoDocumentoRoute');
const ciudadRoutes = require('./routes/CiudadRoute');

app.use('/api/persona', personaRoutes);
app.use('/api/tipoDocumento', tipoDocumentoRoutes);
app.use('/api/ciudad', ciudadRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
