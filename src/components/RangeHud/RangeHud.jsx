import React , {useContext} from 'react'
import {GlobalContext} from '../../globalContext'
import './rangeHud.css'

const RangeHud = ({ level , text , control }) => {

const [ global , controller ] = useContext(GlobalContext) 

const handleclick = event => {
  const rect = document.querySelector('.fill').getBoundingClientRect();
  const percentage = 100 * (event.clientX - rect.left) / (rect.right - rect.left)
  controller.setSliderValue( control , percentage );
  
}

  return(
    <div className={`${control}-screen`} id={`${control}Screen`} onClick={handleclick}>
      <div 
        className={`${control} background`}
        style = {{clipPath: `polygon(${level}% 0% , 100% 0% , 100% 100% , ${level}% 100%)`}}
        >
        {text}
      </div>
      <div 
        className={`${control} fill`}
        style = {{clipPath: `polygon(0% 0% , ${level}% 0% , ${level}% 100% , 0% 100%)`}}
      >
        {text}
      </div>
    </div>
  )
}
export default RangeHud