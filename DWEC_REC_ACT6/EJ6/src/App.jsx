import "../src/App_acordeon.css";
import { Header } from "./Header";
import { Acordion } from "./Acordion";
import { acordeon } from "./datos";

function App() {
  return (
    <>
      <Header></Header>
      <Acordion acordeon={acordeon} />
    </>
  );
}

export default App;
