import React, {useContext, useState, useEffect} from 'react'
import {GlobalContext} from'../../globalContext'
import './bar.css'

const Bar = ({ situation, height }) => {

  const [radius , setRadius] = useState(undefined)
  const [ global , controller ] = useContext(GlobalContext)  

  useEffect(() => {
    const handleResize = () => {
      const barWidth = Math.min(( 0.83572 * window.innerWidth - 14.8)/ global.size , 80)
      setRadius(barWidth / 3)
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [global.size]); 

  const barStyle = {
    borderRadius: `${radius}px ${radius}px 0 0`,
    height : `${height}%`,
  }

  return(
    <div className={`bar ${situation}`} style={barStyle}>
    </div>
  )
}

export default Bar