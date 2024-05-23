import React, { useState } from 'react';

function Formulario() {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [errorCampo1, setErrorCampo1] = useState('');
  const [errorCampo2, setErrorCampo2] = useState('');
  const [errorGeneral, setErrorGeneral] = useState('');

  const handleCampo1Change = (event) => {
    setCampo1(event.target.value);
  };

  const handleCampo2Change = (event) => {
    setCampo2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  
    if (campo1.trim().length < 3 || campo1.trim().startsWith(' ')) {
      setErrorCampo1('El campo debe tener al menos 3 caracteres y no debe comenzar con un espacio en blanco.');
      setErrorGeneral('Por favor chequea que la información sea correcta.');
      return;
    } else {
      setErrorCampo1('');
    }

    
    if (campo2.length < 6) {
      setErrorCampo2('El campo debe tener al menos 6 caracteres.');
      setErrorGeneral('Por favor chequea que la información sea correcta.');
      return;
    } else {
      setErrorCampo2('');
    }

   
    setErrorGeneral('');

    
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
        />
        {errorCampo1 && <p style={{ color: 'red' }}>{errorCampo1}</p>}
        <br />
        <label htmlFor="campo2">Campo 2:</label><br />
        <input
          type="text"
          id="campo2"
          value={campo2}
          onChange={handleCampo2Change}
          required
        />
        {errorCampo2 && <p style={{ color: 'red' }}>{errorCampo2}</p>}
        <br /><br />
        {errorGeneral && <p style={{ color: 'red' }}>{errorGeneral}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
