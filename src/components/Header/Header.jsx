import React, {useContext} from 'react'
import './header.css'
import LangToggler from '../LangToggler/LangToggler.jsx'
import LangContext from '../../language'
import {GlobalContext} from '../../globalContext'

const Header = ( { toggleLng , eng } ) => {
const lang = useContext(LangContext)
const [ global , controller ] = useContext(GlobalContext)
const algoList = Object.keys(lang.algorithms)

const handleChange = event => {
  controller.setAlgo(event.target.value)
}

  return(
    <header>
      <LangToggler toggle={toggleLng} eng={eng}/>
      <h1>{lang.title}</h1>
      <label htmlFor="">
        {lang.subtitle}
        <select 
          id='algoSelector' 
          className='algo-select' 
          value={global.algorithm} 
          onChange={handleChange}
          defaultValue=''
        >
          <option value='' hidden>{lang.algoSelectPlaceholder}</option>
          {algoList.map( algoName =>{
            return <option key={algoName} value={algoName}>{lang.algorithms[algoName]}</option>
          })}
        </select>
      </label>
    </header>
  )
}

export default Header