import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonaForm = ({ fetchPersonas, selectedPersona, clearSelectedPersona }) => {
    const [persona, setPersona] = useState({
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        documento: '',
        fechaNacimiento: '',
        email: '',
        telefono: '',
        usuario: '',
        password: '',
        lugarResidencia: ''
    });

    const [tiposDocumentos, setTiposDocumentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        const fetchTiposDocumentos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tipoDocumento');
                setTiposDocumentos(response.data);
            } catch (error) {
                console.error('Error fetching tipos de documentos', error);
            }
        };

        const fetchCiudades = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/ciudad');
                setCiudades(response.data);
            } catch (error) {
                console.error('Error fetching ciudades', error);
            }
        };

        fetchTiposDocumentos();
        fetchCiudades();
    }, []);

    useEffect(() => {
        if (selectedPersona) {
            setPersona(selectedPersona);
        }
    }, [selectedPersona]);

    const handleChange = (e) => {
        setPersona({ ...persona, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedPersona) {
                await axios.put(`http://localhost:5000/api/persona/${persona._id}`, persona);
            } else {
                await axios.post('http://localhost:5000/api/persona', persona);
            }
            fetchPersonas();
            clearSelectedPersona();
            setPersona({
                nombres: '',
                apellidos: '',
                tipoDocumento: '',
                documento: '',
                fechaNacimiento: '',
                email: '',
                telefono: '',
                usuario: '',
                password: '',
                lugarResidencia: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                value={persona.nombres}
                onChange={handleChange}
            />
            <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                value={persona.apellidos}
                onChange={handleChange}
            />
            <select name="tipoDocumento" value={persona.tipoDocumento} onChange={handleChange}>
                <option value="">Selecciona un tipo de documento</option>
                {tiposDocumentos.map((tipo) => (
                    <option key={tipo._id} value={tipo._id}>
                        {tipo.nombre}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="documento"
                placeholder="Documento"
                value={persona.documento}
                onChange={handleChange}
            />
            <input
                type="date"
                name="fechaNacimiento"
                placeholder="dd/mm/aaaa"
                value={persona.fechaNacimiento}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={persona.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={persona.telefono}
                onChange={handleChange}
            />
            <input
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={persona.usuario}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={persona.password}
                onChange={handleChange}
            />
            <select name="lugarResidencia" value={persona.lugarResidencia} onChange={handleChange}>
                <option value="">Selecciona una ciudad</option>
                {ciudades.map((ciudad) => (
                    <option key={ciudad._id} value={ciudad._id}>
                        {ciudad.nombre}
                    </option>
                ))}
            </select>
            <button type="submit">{selectedPersona ? 'Actualizar' : 'Registrar'}</button>
            {selectedPersona && (
                <button type="button" onClick={() => clearSelectedPersona()}>
                    Cancelar
                </button>
            )}
        </form>
    );
};

export default PersonaForm;
