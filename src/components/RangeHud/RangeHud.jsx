import React , {useContext , useEffect } from 'react'
import {GlobalContext} from '../../globalContext'
import './rangeHud.css'

const RangeHud = ({ level , text , control }) => {

const controller = useContext(GlobalContext)[1] 

useEffect( () => {
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('mousedown', handleTouchStart)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('mousedown', handleTouchStart)
    }
}) 

const handleTouchStart = () => {
  document.addEventListener('touchmove',hanldeNewValue)
  document.addEventListener('touchend',listenEnd)
  document.addEventListener('mousemove',hanldeNewValue)
  document.addEventListener('mouseup',listenEnd)
}
const listenEnd = () => {
  document.removeEventListener('touchmove',hanldeNewValue)
  document.removeEventListener('touchend',listenEnd)
  document.removeEventListener('mousemove',hanldeNewValue)
  document.removeEventListener('mouseup',listenEnd)
}
const hanldeNewValue = event => {
  const rect = document.querySelector('.fill').getBoundingClientRect();
  let percentage = 100 * (event.pageX - rect.left) / (rect.right - rect.left)
  if(percentage > 100) percentage = 100
  if(percentage < 0) percentage = 1
  controller.setSliderValue( control , percentage );  
}

  return(
    <div className={`${control}-screen`} id={`${control}Screen`}>
      <div 
        className={`${control} background`}
        style = {{
          clipPath: `polygon(${level}% 0% , 100% 0% , 100% 100% , ${level}% 100%)`,
          webKitClipPath: `polygon(${level}% 0% , 100% 0% , 100% 100% , ${level}% 100%)`
        }}
        >
        {text}
      </div>
      <div 
        className={`${control} fill`}
        style = {{
          clipPath: `polygon(0% 0% , ${level}% 0% , ${level}% 100% , 0% 100%)`,
          webkitClipPath: `polygon(0% 0% , ${level}% 0% , ${level}% 100% , 0% 100%)`,
        }}
      >
        {text}
      </div>
    </div>
  )
}
export default RangeHud