import { useState }from 'react';
import OvejasList from './OvejasList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Contador de Patinalones</h3>
      <h4>{count}</h4>
      <div>
        <button onClick={() => setCount(count+1)}>
          CONTAR
        </button>
      </div>
      <OvejasList count={count}></OvejasList>
    </>
  )
}

export default App
