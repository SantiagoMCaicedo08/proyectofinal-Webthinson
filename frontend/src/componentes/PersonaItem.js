import React from 'react';

const PersonaItem = ({ persona, onDelete }) => {
    return (
        <div>
            <h3>{persona.nombres} {persona.apellidos}</h3>
            <p>{persona.tipoDocumento}: {persona.documento}</p>
            <button onClick={() => onDelete(persona._id)}>Eliminar</button>
        </div>
    );
};

export default PersonaItem;
