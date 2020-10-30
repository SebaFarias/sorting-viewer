import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms',
    subtitle: 'Coosen algorithm: ',
    toggle: {
      background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 80%)'
    },
    algo: {
      0: 'Algorithm 1',
    },
};
const ESPANOL = {  
  title: 'Algoritmos de Orden',
  subtitle: 'Algoritmo escogido: ',
  toggle: {
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 20%, #FFFFFF 100%)'
  },
  algo: {
    0: 'Algoritmo 1',
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