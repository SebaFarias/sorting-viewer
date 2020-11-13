import React, { useContext } from 'react'
import {GlobalContext} from '../../globalContext'
import LanguageContext from '../../language'
import RangeHud from '../RangeHud/RangeHud'
import './speedBtn.css'

const MAX_MS_BETWEEN_STEP = 1000
const MIN_MS_BETWEEN_STEP = 20

const SpeedBtn = ({ selecting , tools }) => {

  const lang = useContext(LanguageContext)
  const [ global , controller ] = useContext(GlobalContext)

  const handleButtonClick = () => {    
    tools.openSpeed() 
    }
  const handleChange = event => {
    const newSpeed = 1000 / event.target.value
    controller.setSpeed(newSpeed)
  }

  return(
    <div className={`control speed ${selecting? 'using' : ''}`}>
      <label className='label' htmlFor='speedBtn'>{lang['speed']}</label>
      {selecting?
      <div id='speedSelector'>
        <RangeHud 
          level={( 2000 / global.speed)} 
          text={`${(1000/global.speed).toString().substring(0,3).replace(/\.$/, '')} / s`}  
          control='speed'/>
        <input 
          className='range speed'
          type = 'range'
          step = '1'
          onInput = {handleChange}
          min = {1000 / MAX_MS_BETWEEN_STEP}
          max = {1000 / MIN_MS_BETWEEN_STEP}
          value = {1000 / global.speed}
        ></input>
      </div>  
      :
      <button 
      id = 'speedBtn'
      className ='speed btn' 
      name = 'speed button' 
      aria-checked = {selecting}
      onClick = {handleButtonClick}
    >
      <div className='speed-icon'></div>
    </button>  
      }
    </div>
  )
}
export default SpeedBtn