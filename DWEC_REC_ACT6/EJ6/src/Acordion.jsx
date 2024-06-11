import { useState } from "react";
import { AcordionItem } from "./AcordionItem";

export const Acordion = ({ acordeon }) => {
  const [activo, setActivo] = useState();

  const manejarClick = (index) => {
    if (activo === index) {
      setActivo(null);
    } else {
      setActivo(index);
    }
  };

  return (
    <div className="container">
      {acordeon.map((item, index) => (
        <AcordionItem
          key={index}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
          activo={activo === index}
          onClick={() => manejarClick(index)}
        />
      ))}
    </div>
  );
};
