import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from '../../language'
import Header from '../Header/Header'
import Bars from '../Bars/Bars'
import Controls from '../Controls/Controls'
import './layout.css'
const Layout = () => {

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
      <Header toggleLng={toggleLanguage} state={english}/>
      <Bars/>
      <Controls/>
    </LanguageContext.Provider>
  )
}

export default Layout