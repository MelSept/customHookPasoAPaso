import { useState } from "react";

// 7- retornamos las variables que vamos a utilizar en nuestro componente
// 8 - Volvemos a Counter App para importar useCounter

const useCounter = () => {
  //creamos la funcion Counter y la inicializamos el contador en 0
  const [counter, setCounter] = useState(0);
  //creamos la funcion increment. le sumamos 1 para que realice el incremento del contador
  const increment = () => {
    setCounter(counter + 1);
  };
  //creamos la funcion de reset, llamamos a setCounter y lo volvemos a 0
  const reset = () => {
    setCounter(0);
  };

  return [counter, increment, reset];
};

export default useCounter;
