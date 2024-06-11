/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Translator from './Translator.jsx';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h1>Traductor MIMIMI</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ingresa el texto aquí..."
      />
      <Translator text={inputText} />
    </div>
  );
};

export default App;