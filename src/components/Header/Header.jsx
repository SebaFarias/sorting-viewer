import React, {useContext} from 'react'
import './header.css'
import LangToggler from '../LangToggler/LangToggler.jsx'
import {GlobalContext} from '../../globalContext'
import LangContext from '../../language'

const Header = ( { toggleLng , eng , toggleSort } ) => {
const lang = useContext(LangContext)
const [ global , controller ] = useContext(GlobalContext)
const algoList = Object.keys(lang.algorithms[global.mode])

const handleChange = event => {
  controller.setAlgo(event.target.value)
  document.getElementById('algoSelector').size = 1
}

const toggleMode = () => {
  toggleSort()
  controller.toggleMode()
}

  return(
    <header>
      <LangToggler toggle={toggleLng} eng={eng}/>
      <div 
        onClick={toggleMode} 
        className='title-container' 
      >
        <span className="mode-toggler">&#60; </span><h1>{lang.title}</h1><span className="mode-toggler"> &#62;</span>
      </div>
      <div style={{display: 'flex'}}>
        <label htmlFor="">
        {lang.subtitle} 
        </label>
        <select 
          id='algoSelector' 
          className='algo-select' 
          value={global.algorithm} 
          onChange={handleChange}
          defaultValue=''
          >
          <option value='' hidden>{lang.algoSelectPlaceholder}</option>
          {algoList.map( algoName =>{
            return <option key={algoName} value={algoName}>{lang.algorithms[global.mode][algoName]}</option>
          })}
        </select>
      </div>
    </header>
  )
}

export default Header