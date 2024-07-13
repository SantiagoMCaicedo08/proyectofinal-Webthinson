import React from 'react';
import axios from 'axios';

const PersonaList = ({ personas, fetchPersonas, setSelectedPersona }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/persona/${id}`);
            fetchPersonas();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {personas.map((persona) => (
                <div key={persona._id}>
                    <h3>{persona.nombres} {persona.apellidos}</h3>
                    <p>{persona.documento}</p>
                    <button onClick={() => setSelectedPersona(persona)}>Editar</button>
                    <button onClick={() => handleDelete(persona._id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default PersonaList;
