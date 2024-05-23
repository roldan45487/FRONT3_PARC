

import React, { useState } from 'react';

function Formulario() {

  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

 
  const handleCampo1Change = (event) => {
    setCampo1(event.target.value);
  };

  const handleCampo2Change = (event) => {
    setCampo2(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Campo 1:", campo1);
    console.log("Campo 2:", campo2);

  };

  return (
    <div>
      <h2>Formulario con dos Inputs de Texto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="campo1">Campo 1:</label><br />
        <input
          type="text"
          id="campo1"
          value={campo1}
          onChange={handleCampo1Change}
          required
        /><br />
        <label htmlFor="campo2">Campo 2:</label><br />
        <input
          type="text"
          id="campo2"
          value={campo2}
          onChange={handleCampo2Change}
          required
        /><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
