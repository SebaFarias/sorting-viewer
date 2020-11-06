import React, {useState, useEffect} from 'react'
import './bar.css'

const Bar = ({situation, size, height}) => {

  const [radius , setRadius] = useState(undefined)
  

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth / 4 * size)
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