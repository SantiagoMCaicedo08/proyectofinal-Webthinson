import React from 'react';
import axios from 'axios';

<div></div>
const CiudadList = ({ ciudades, fetchCiudades, setSelectedCiudad }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/ciudad/${id}`);
            fetchCiudades();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {ciudades.map((ciudad) => (
                <div key={ciudad._id}>
                    <h3>{ciudad.nombre}</h3>
                    <p>{ciudad.descripcion}</p>
                    <button onClick={() => setSelectedCiudad(ciudad)}>Editar</button>
                    <button onClick={() => handleDelete(ciudad._id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CiudadList;
