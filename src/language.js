import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms',
    subtitle: 'Choosen algorithm: ',
    welcome: 'Welcome! Choose an Algorithm',
    algoSelectPlaceholder: 'Choose one',
    algorithms: {
      sort: {
        selectionSort: 'Selection sort',
        bubbleSort: 'Bubble sort',
        insertionSort: 'Insertion sort',
      },
      path: {
        breadthFirstSearch: 'Breadth first search',
      },
    },
    restart: 'restart',
    run:{
      true: 'Pause',
      false: 'Run'
    },
    size: 'Length',
    speed: 'Speed',
    fullscreen: 'Fullscreen',
  };
  const ESPANOL = {  
    title: 'Algoritmos de Orden',
    subtitle: 'Algoritmo escogido: ',
    welcome: 'Bienvenido! Escoje un Algoritmo',
    algoSelectPlaceholder: 'Escoge uno',
    algorithms: {
      sort: {
        selectionSort: 'Orden por selección',
        bubbleSort: 'Orden de burbuja',
        insertionSort: 'Orden por inserción',
      },
      path: {
        breadthFirstSearch: 'Búsqueda por amplitud',
      },
    },
    restart: 'reiniciar',
    run:{
      true: 'Pausar',
      false: 'Ordenar'
    },
    size: 'Cantidad',
    speed: 'Velocidad',
    fullscreen: 'Pantalla',
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