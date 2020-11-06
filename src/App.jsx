import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from './language'
import Header from './components/Header/Header'
import Bars from './components/Bars/Bars'
import Controls from './components/Controls/Controls'
import './style.css'

const INITIAL_SIZE = 8   
const INITIAL_SPEED = 80  //In milliseconds

const App = () => {

  const [ english, setEnglish ] = useState(Language.getLanguage)
  const [running, setRunnung] = useState(false)
  const [size, setSize] = useState(INITIAL_SIZE)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const [algorithm, setAlgorithm] = useState('selectionSort')
  const language = english ? ENGLISH : ESPANOL
  
  const toggleLanguage = useCallback( () => {
    setEnglish( prevState => {
      const newState = !prevState
      Language.setLanguage(newState)
      return newState
    })
  },[english])

  const toggleRunning = () => {
    setRunnung(!running)
  }
  const sizeRange = newSize => {
    setSize(newSize)
  }
  const speedRange = newSpeed => {
    setSpeed(newSpeed)
  }
  const setAlgo = newAlgorithm => {
    setAlgorithm(newAlgorithm)
  }

  return(
    <LanguageContext.Provider value={language}>
      <Header 
        algo={algorithm}
        eng={english} 
        toggleLng={toggleLanguage} 
      />
      <Bars
        run={running} 
        size={size}
        speed={speed}
        algo={algorithm}
      />
      <Controls 
        run={running} 
        size={size}
        speed={speed}
        algo={algorithm}
        toggleRun={toggleRunning}
        sizeRange={sizeRange}
        speedRange={speedRange}
        setAlgo={setAlgo}
      />
    </LanguageContext.Provider>
  )
}

export default App