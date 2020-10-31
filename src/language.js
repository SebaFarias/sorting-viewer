import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms',
    subtitle: 'Coosen algorithm: ',
    algo: {
      0: 'Algorithm 1',
    },
    run:{
      true: 'Pause',
      false: 'Run'
    },
};
const ESPANOL = {  
  title: 'Algoritmos de Orden',
  subtitle: 'Algoritmo escogido: ',
  algo: {
    0: 'Algoritmo 1',
  },
  run:{
    true: 'Pausar',
    false: 'Ordenar'
  },
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