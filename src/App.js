import React, { useState } from 'react'
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';


// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [contabilazdor,setContabilizador]=useState(0);
  const aumentar = ()=>{
    setContabilizador(contabilazdor + 1)
  }

  return (
    <div className="App">
      <Estatus contabilazdor={contabilazdor} />
      <Posteos aumentar={aumentar} />
    </div>
  );
}

export default App;
