import React, { useContext, useEffect, useState } from 'react'
import {GlobalContext} from '../../globalContext'
import NoAlgoCard from '../NoAlgoCard/NoAlgoCard'
import './bars.css'
import LangContext from '../../language'

const Bars = () => { 

  const [ global , controller ] = useContext(GlobalContext)
  const lang = useContext(LangContext)

  const restart = () => {
    if(global.sorted) controller.initialize(global.algorithm,global.size)
  }

  return(
    <main className="bars" onClick={restart}>
      {!global.algorithm? <NoAlgoCard/> : global.bars.map( bar => {
        return <Bar key={bar.hash} situation={bar.state} height={bar.heigth}/>
      })}
      {global.sorted? 
      <button 
        className='restartBtn' 
        onClick={restart}
      >{lang.restart}</button>:''}
    </main>
  )
}

const Bar = ({ situation, height }) => {

  const [radius , setRadius] = useState(undefined)
  const global = useContext(GlobalContext)[0]  

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

export default Bars