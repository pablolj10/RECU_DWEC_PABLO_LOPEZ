/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Translator = ({ text }) => {
  const translateText = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let translatedText = '';

    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        translatedText += 'i';
      } else {
        translatedText += text[i];
      }
    }

    return translatedText;
  };

  return <p>{translateText(text)}</p>;
};

export default Translator;