import React, {useContext} from 'react'
import './header.css'
import LangToggler from '../LangToggler/LangToggler.jsx'
import LangContext from '../../language'
import {GlobalContext} from '../../globalContext'

const Header = ( { toggleLng , eng } ) => {
const lang = useContext(LangContext)
const [ global , controller ] = useContext(GlobalContext)

  return(
    <header>
      <LangToggler toggle={toggleLng} eng={eng}/>
      <h1>{lang.title}</h1>
      <h2>{global.algorithm ? `${lang.subtitle} ${lang.algorithms[global.algorithm]}` : ''}</h2>
    </header>
  )
}

export default Header