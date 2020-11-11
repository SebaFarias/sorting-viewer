import React, { useContext } from 'react'
import {GlobalContext} from '../../globalContext'
import LanguageContext from '../../language'
import RangeHud from '../RangeHud/RangeHud'

const MAX_MS_BETWEEN_STEP = 1000
const MIN_MS_BETWEEN_STEP = 20

const SpeedBtn = ({ selecting , tools }) => {

  const lang = useContext(LanguageContext)
  const [ global , controller ] = useContext(GlobalContext)

  const handleButtonClick = () => {    
    tools.openSpeed() 
    }
  const handleChange = event => {
    const newSpeed = MAX_MS_BETWEEN_STEP + MIN_MS_BETWEEN_STEP - event.target.value
    controller.setSpeed(newSpeed)
  }

  return(
    <div className={`control speed ${selecting? 'using' : ''}`}>
      <label className='label' htmlFor='speedBtn'>{lang['speed']}</label>
      {selecting?
      <div id='speedSelector'>
        <RangeHud 
          level={(100 * (MAX_MS_BETWEEN_STEP + MIN_MS_BETWEEN_STEP - global.speed) / (MAX_MS_BETWEEN_STEP - MIN_MS_BETWEEN_STEP))} 
          text={`${(1000/global.speed).toString().substring(0,3)} / s`}  
          control='speed'/>
        <input 
          className='range speed'
          type = 'range'
          step = '5'
          onInput = {handleChange}
          min = {MIN_MS_BETWEEN_STEP}
          max = {MAX_MS_BETWEEN_STEP}
          value = {MAX_MS_BETWEEN_STEP + MIN_MS_BETWEEN_STEP - global.speed}
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