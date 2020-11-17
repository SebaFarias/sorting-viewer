import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from './language'
import {GlobalProvider} from './globalContext'
import Header from './components/Header/Header'
import Bars from './components/Bars/Bars'
import Controls from './components/Controls/Controls'
import SettingsBar from './components/SettingsBar/SettingsBar'
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
    document.title = english ? 'Sorting Viewer' : 'Visualizador de Ordenado'
  },[english])
  return(
    <LanguageContext.Provider value={language}>
      <GlobalProvider>
        <Header 
          eng={english} 
          toggleLng={toggleLanguage} 
        />
        <SettingsBar/>
        <Bars/>
        <Controls/>
      </ GlobalProvider>
    </LanguageContext.Provider>
  )
}

export default App