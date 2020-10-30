import React, {useState ,useCallback} from 'react'
import LanguageContext , { ENGLISH , ESPANOL , Language } from '../language'
import Header from './Header'
import Bars from './Bars'
import Controls from './Controls'
import '../styles/layout.css'
const Layout = () => {

  const [ english, setEnglish ] = useState(Language.getLanguage)
  const lenguage = english ? ENGLISH : ESPANOL

  const toggleLanguage = useCallback( () => {
    setEnglish( prevState => {
      const newState = !prevState
      Language.setLanguage(newState)
      return newState
    })
  },[english])

  return(
    <LanguageContext.Provider>
      <Header/>
      <Bars/>
      <Controls/>
    </LanguageContext.Provider>
  )
}

export default Layout