import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from './language'
import Header from './components/Header/Header'
import Bars from './components/Bars/Bars'
import Controls from './components/Controls/Controls'
import './style.css'

const App = () => {
  const [ english, setEnglish ] = useState(Language.getLanguage)
  const language = english ? ENGLISH : ESPANOL

  const toggleLanguage = useCallback( () => {
    setEnglish( prevState => {
      const newState = !prevState
      Language.setLanguage(newState)
      return newState
    })
  },[english])

  return(
    <LanguageContext.Provider value={language}>
      <Header toggleLng={toggleLanguage} eng={english}/>
      <Bars/>
      <Controls/>
    </LanguageContext.Provider>
  )
}

export default App