import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from './language'
import {GlobalProvider} from './globalContext'
import Header from './components/Header/Header'
import Bars from './components/Bars/Bars'
import Controls from './components/Controls/Controls'
import './style.css'

const INITIAL_SIZE = 40
const INITIAL_SPEED = 200  //In milliseconds

const App = () => {

  const [ english, setEnglish ] = useState(Language.getLanguage)
  
  const [size, setSize] = useState(INITIAL_SIZE)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const [algorithm, setAlgorithm] = useState('insertionSort')
  const language = english ? ENGLISH : ESPANOL
  
  const toggleLanguage = useCallback( () => {  
    setEnglish( prevState => {
      const newState = !prevState
      Language.setLanguage(newState)
      return newState
    })
    document.title = english ? 'Sorting Viewer' : 'Visualizador de Ordenado'
  },[english])

  const sizeRange = newSize => {
    setSize(newSize)
  }
  const speedRange = newSpeed => {
    setSpeed(newSpeed)
  }
  return(
    <LanguageContext.Provider value={language}>
      <GlobalProvider>
        <Header 
          algo={algorithm}
          eng={english} 
          toggleLng={toggleLanguage} 
        />
        <Bars
          size={size}
          speed={speed}
          algo={algorithm}
        />
        <Controls 
          size={size}
          speed={speed}
          sizeRange={sizeRange}
          speedRange={speedRange}
        />
      </ GlobalProvider>
    </LanguageContext.Provider>
  )
}

export default App