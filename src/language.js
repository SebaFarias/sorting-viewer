import React from 'react'

const LANGUAGE_KEY = 'ENGLISH';
const ENGLISH = { 
    title: 'Sorting Algorithms'
};
const ESPANOL = {  
  title: 'Algoritmos de Orden'
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