import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TipoDocumentoForm = ({ fetchTipoDocumentos, selectedTipoDocumento, clearSelectedTipoDocumento }) => {
    const [tipoDocumento, setTipoDocumento] = useState({
        nombre: '',
        descripcion: ''
    });

    useEffect(() => {
        if (selectedTipoDocumento) {
            setTipoDocumento(selectedTipoDocumento);
        }
    }, [selectedTipoDocumento]);

    const handleChange = (e) => {
        setTipoDocumento({ ...tipoDocumento, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedTipoDocumento) {
                await axios.put(`http://localhost:5000/api/tipoDocumento/${tipoDocumento._id}`, tipoDocumento);
            } else {
                await axios.post('http://localhost:5000/api/tipoDocumento', tipoDocumento);
            }
            fetchTipoDocumentos();
            clearSelectedTipoDocumento();
            setTipoDocumento({ nombre: '', descripcion: '' });
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
                value={tipoDocumento.nombre}
                onChange={handleChange}
            />
            <input
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={tipoDocumento.descripcion}
                onChange={handleChange}
            />
            <button type="submit">{selectedTipoDocumento ? 'Actualizar' : 'Registrar'}</button>
            {selectedTipoDocumento && (
                <button type="button" onClick={clearSelectedTipoDocumento}>
                    Cancelar
                </button>
            )}
        </form>
    );
};

export default TipoDocumentoForm;
