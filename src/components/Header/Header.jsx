import React, {useContext} from 'react'
import './header.css'
import LangToggler from '../LangToggler/LangToggler.jsx'
import LangContext from '../../language'

const Header = ({toggleLng , eng}) => {
const lang = useContext(LangContext)
const algo = 0

  return(
    <header>
      <LangToggler toggle={toggleLng} eng={eng}/>
      <h1>{lang.title}</h1>
      <h2>{lang.subtitle}{lang.algo[algo]}</h2>
    </header>
  )
}

export default Header