import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CiudadForm = ({ fetchCiudades, selectedCiudad, clearSelectedCiudad }) => {
    const [ciudad, setCiudad] = useState({
        nombre: '',
        descripcion: ''
    });

    useEffect(() => {
        if (selectedCiudad) {
            setCiudad(selectedCiudad);
        }
    }, [selectedCiudad]);

    const handleChange = (e) => {
        setCiudad({ ...ciudad, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedCiudad) {
                await axios.put(`http://localhost:5000/api/ciudad/${ciudad._id}`, ciudad);
            } else {
                await axios.post('http://localhost:5000/api/ciudad', ciudad);
            }
            fetchCiudades();
            clearSelectedCiudad();
            setCiudad({ nombre: '', descripcion: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={ciudad.nombre}
                onChange={handleChange}
            />
            <input
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={ciudad.descripcion}
                onChange={handleChange}
            />
            <button type="submit">{selectedCiudad ? 'Actualizar' : 'Registrar'}</button>
            {selectedCiudad && (
                <button type="button" onClick={clearSelectedCiudad}>
                    Cancelar
                </button>
            )}
        </form>
    );
};

export default CiudadForm;
