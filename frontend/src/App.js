import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PersonaForm from './componentes/PersonaForm';
import PersonaList from './componentes/PersonaList';
import TipoDocumentoForm from './componentes/TipoDocumentoForm';
import TipoDocumentoList from './componentes/TipoDocumentoList';
import CiudadForm from './componentes/CiudadForm';
import CiudadList from './componentes/CiudadList';

const App = () => {
    const [personas, setPersonas] = useState([]);
    const [selectedPersona, setSelectedPersona] = useState(null);
    const [tipoDocumentos, setTipoDocumentos] = useState([]);
    const [selectedTipoDocumento, setSelectedTipoDocumento] = useState(null);
    const [ciudades, setCiudades] = useState([]);
    const [selectedCiudad, setSelectedCiudad] = useState(null);

    const fetchPersonas = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/persona');
            setPersonas(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTipoDocumentos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tipoDocumento');
            setTipoDocumentos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCiudades = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/ciudad');
            setCiudades(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPersonas();
        fetchTipoDocumentos();
        fetchCiudades();
    }, []);

    const clearSelectedPersona = () => {
        setSelectedPersona(null);
    };

    const clearSelectedTipoDocumento = () => {
        setSelectedTipoDocumento(null);
    };

    const clearSelectedCiudad = () => {
        setSelectedCiudad(null);
    };

    return (
        <div>
            <h1>Registro de Personas</h1>
            <PersonaForm 
                fetchPersonas={fetchPersonas} 
                selectedPersona={selectedPersona} 
                clearSelectedPersona={clearSelectedPersona} 
            />
            <PersonaList 
                personas={personas} 
                fetchPersonas={fetchPersonas} 
                setSelectedPersona={setSelectedPersona} 
            />
            <h1>Tipo de Documentos</h1>
            <TipoDocumentoForm 
                fetchTipoDocumentos={fetchTipoDocumentos} 
                selectedTipoDocumento={selectedTipoDocumento} 
                clearSelectedTipoDocumento={clearSelectedTipoDocumento} 
            />
            <TipoDocumentoList 
                tipoDocumentos={tipoDocumentos} 
                fetchTipoDocumentos={fetchTipoDocumentos} 
                setSelectedTipoDocumento={setSelectedTipoDocumento} 
            />
            <h1>Ciudades</h1>
            <CiudadForm 
                fetchCiudades={fetchCiudades} 
                selectedCiudad={selectedCiudad} 
                clearSelectedCiudad={clearSelectedCiudad} 
            />
            <CiudadList 
                ciudades={ciudades} 
                fetchCiudades={fetchCiudades} 
                setSelectedCiudad={setSelectedCiudad} 
            />
        </div>
    );
};

export default App;
