import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from './language'
import Header from './components/Header/Header'
import Bars from './components/Bars/Bars'
import Controls from './components/Controls/Controls'
import './style.css'

const App = () => {
  const [ english, setEnglish ] = useState(Language.getLanguage)
  const [running, setRunnung] = useState(false)
  const [size, setSize] = useState(50)
  const [speed, setSpeed] = useState(50)
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

  return(
    <LanguageContext.Provider value={language}>
      <Header toggleLng={toggleLanguage} eng={english}/>
      <Bars/>
      <Controls 
        run={running} 
        toggleRun={toggleRunning}
        size={size}
        sizeRange={sizeRange}
        speed={speed}
        speedRange={speedRange}
      />
    </LanguageContext.Provider>
  )
}

export default App