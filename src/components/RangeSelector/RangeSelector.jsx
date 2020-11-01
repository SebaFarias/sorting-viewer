import React, {useContext} from 'react'
import LanguageContext from '../../language'
import './rangeSelector.css'

const RangeSelector = ({control, state, setter}) => {

const lang = useContext(LanguageContext)

  return(
    <div className='control'>
      <label className='label' htmlFor={`${control}Btn`}>{lang[control]}</label>
      <button id= {`${control}Btn`}className={`${control} btn`} name={`${control} button`} onClick={setter}>
        <div className={`${control}-icon`}> { control === 'speed' ? speedIcon : ''} </div>
      </button>
    </div>
  )
}

const speedIcon = 
<svg width="0" height="0" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M140 70C140 39.5 116 -3.95115e-05 70 0C24 -3.95115e-05 0 39.5 0 70H24.5C24.5 55.5 32.5 24 70 24C107.5 24 115.5 55.5 115.5 70H140Z" fill="url(#paint0_linear)"/>
  <defs>
    <linearGradient id="paint0_linear" x1="70" y1="0" x2="70" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#82B53E"/>
      <stop offset="1" stop-color="#A9D154"/>
    </linearGradient>
  </defs>
</svg>

export default RangeSelector