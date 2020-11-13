import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms',
    subtitle: 'Coosen algorithm: ',
    welcome: 'Welcome! Choose an Algorithm',
    algoSelectPlaceholder: 'Choose one',
    algorithms: {
      selectionSort: 'Selection sort',
      bubbleSort: 'Bubble sort',
      insertionSort: 'Insertion sort',
    },
    run:{
      true: 'Pause',
      false: 'Run'
    },
    size: 'Length',
    speed: 'Speed',
    algo: 'Algorithm',
  };
  const ESPANOL = {  
    title: 'Algoritmos de Orden',
    subtitle: 'Algoritmo escogido: ',
    welcome: 'Bienvenido! Escoje un Algoritmo',
    algoSelectPlaceholder: 'Escoge uno',
    algorithms: {
      selectionSort: 'Orden por selección',
      bubbleSort: 'Orden de burbuja',
      insertionSort: 'Orden por inserción',
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