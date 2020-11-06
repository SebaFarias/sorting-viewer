import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms',
    subtitle: 'Coosen algorithm: ',
    algorithms: {
      selectionSort: 'Selection sort',
      bubbleSort: 'Bubble sort',
    },
    run:{
      true: 'Pause',
      false: 'Run'
    },
    size: 'Size',
    speed: 'Speed',
    algo: 'Algorithm',
  };
  const ESPANOL = {  
    title: 'Algoritmos de Orden',
    subtitle: 'Algoritmo escogido: ',
    algorithms: {
      selectionSort: 'Orden por Selección',
      bubbleSort: 'Orden de Burbuja',
    },
    run:{
      true: 'Pausar',
      false: 'Ordenar'
    },
    size: 'Cantidad',
    speed: 'Velocidad',
    algo: 'Algoritmo',
};

const Language = {
    getLanguage: () => {
        try {
            return JSON.parse(window.localStorage.getItem(LANGUAGE_KEY)) === true
        } catch (e) {
            return false
        }
    },
    setLanguage: value => {
        try {
            window.localStorage.setItem(LANGUAGE_KEY,JSON.stringify(value === true))
        } catch (e) {}
    }
}

export { ENGLISH , ESPANOL , Language }

export default React.createContext();