import React from 'react'
import './rangeHud.css'

const RangeHud = ({ level , text , control }) => {

  return(
    <div className={`${control}-screen`}>
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