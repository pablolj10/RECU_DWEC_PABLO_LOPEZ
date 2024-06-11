import { useState } from 'react';

function App() {

  const listaFrutas = [
    { id: 1, nombre: 'Manzana' },
    { id: 2, nombre: 'Pera' },
    { id: 3, nombre: 'Platano' },
    { id: 4, nombre: 'Naranja' },
    { id: 5, nombre: 'Fresa' },
    { id: 6, nombre: 'Melocotón' },
    { id: 7, nombre: 'Ciruela' },
    { id: 8, nombre: 'Uva' },
    { id: 9, nombre: 'Sandía' },
    { id: 10, nombre: 'Melón' },
  ];


  const [textoBusqueda, setTextoBusqueda] = useState('');

  const manejarCambio = (e) => {
    setTextoBusqueda(e.target.value);
  };

  const listaFiltrada = listaFrutas.filter(item =>
    item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  );


  return (
    <div>
      <input type="text" value={textoBusqueda} onChange={manejarCambio} />
      <ul>
        {listaFiltrada.map(item => (
          <li key={item.id}> {item.nombre} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
