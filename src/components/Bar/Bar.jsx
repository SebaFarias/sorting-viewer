import React from 'react'
import './bar.css'

const Bar = ({situation,radius, height}) => {

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