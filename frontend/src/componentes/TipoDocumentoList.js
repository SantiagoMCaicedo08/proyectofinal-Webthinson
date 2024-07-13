import React from 'react';
import axios from 'axios';

const TipoDocumentoList = ({ tipoDocumentos, fetchTipoDocumentos, setSelectedTipoDocumento }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tipoDocumento/${id}`);
            fetchTipoDocumentos();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {tipoDocumentos.map((tipo) => (
                <div key={tipo._id}>
                    <h3>{tipo.nombre}</h3>
                    <p>{tipo.descripcion}</p>
                    <button onClick={() => setSelectedTipoDocumento(tipo)}>Editar</button>
                    <button onClick={() => handleDelete(tipo._id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default TipoDocumentoList;
