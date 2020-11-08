import React, {useState, useEffect} from 'react'
import './bar.css'

const Bar = ({situation, size, height}) => {

  const [radius , setRadius] = useState(undefined)
  

  useEffect(() => {
    const handleResize = () => {
      const barWidth = Math.min(( 0.83572 * window.innerWidth - 14.8)/ size , 80)
      setRadius(barWidth / 3)
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

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