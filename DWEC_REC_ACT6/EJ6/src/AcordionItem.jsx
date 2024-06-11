
export const AcordionItem = ({ pregunta, respuesta, activo, onClick }) => {
  return (
    <div className={`accordion_item ${activo ? "active" : ""}`}>
      <button className="button" onClick={onClick}>
        {pregunta}
      </button>
      {activo && <div className="answer">{respuesta}</div>}
    </div>
  );
};
