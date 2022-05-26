import React from "react";
import useCounter from "./hooks/useCounter";

// 1- creamos el custom Hook y vamos a la App.js a importarlo
// 3- Creacion del contador
// 4 - Creamos el titulo H1, el Boton con el que vamos a ir incrementando el contador,
// y el boton de Reset para volver el contador a 0
// 5 - Creacion de la constante que retorna el estado y las dos funciones
// 6 - Creamos el Hook useCounter
// 9 - Colocamos el contador en clicks
//10 - Controlamos el click en el buton para poder incrementar utilizando la funcion increment
//11 - Controlamos el click en el buton para poder usar la funcion reset y que el contador vuelva a 0

const CounterApp = () => {
  // constante que extrae de un arreglo retornado por el custom hook "useCounter"
  const [counter, increment, reset] = useCounter();
  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterApp;
