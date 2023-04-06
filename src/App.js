import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
   function disminuirValor() {
    const v = numero-1;
    setNumero(v)
}
  function aumentarValor() {
    const v = numero+1;
    setNumero(v)
}    
const [numero, setNumero] = useState(0);
  return (
    <div>
      <p>Número: {numero}</p>
      <button onClick={disminuirValor}>Disminuir valor</button>
      <button onClick={aumentarValor}>Aumentar valor</button>
    </div>
    
  );
}

export default App;
