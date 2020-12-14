import React, { useContext, useEffect, useState } from 'react'
import {GlobalContext} from '../../globalContext'
import NoAlgoCard from '../NoAlgoCard/NoAlgoCard'
import './squares.css'
import LangContext from '../../language'

const Squares = () => { 

  const [ global , controller ] = useContext(GlobalContext)
  const [ gridStyle , setGridStyle ] = useState(undefined)
  const lang = useContext(LangContext)

  useEffect(() => {
    const handleResize = () => {
      const squareWidth = Math.min(( 0.83572 * window.innerWidth - 14.8)/ global.size ,window.innerHeight/(1.7 * global.size), 40)
      setGridStyle({
        gridTemplateColumns: `repeat(${global.size}, ${squareWidth}px)`,
        gridTemplateRows: `repeat(${global.size}, ${squareWidth}px)`,
        border: '3px solid white',
        borderRadius: '8px'
      })
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [global.size]); 

  return(
    <main className="squares-container" onClick={controller.handleClick}>
      <div className="squares" style={global.algorithm? gridStyle: {}}>
        {!global.algorithm? 
        <NoAlgoCard/> 
        : 
        global.data.map( (row,i) => {
          return row.map( (square,j) => {
            let corner = false
            const max = global.size-1
            if( i===0 && j===0 ) corner = 0
            if( i===0 && j=== max ) corner = 1
            if( i===max && j===0 ) corner = 2
            if( i===max && j=== max ) corner = 3
            return <Square id={`square-${i}-${j}`} key={`${i}-${j}`} situation={square.state} corner={corner}/>
          })
        })}
        {global.finished? 
        <button 
        className='restartBtn' 
        >{lang.restart}</button>:''}
      </div>
    </main>
  )
}

const Square = ({ id, situation , corner}) => {
  const cornerRadius = 8 
  const cornerStyle = corner === 0? {borderTopLeftRadius: cornerRadius + 'px'} 
  : corner === 1 ? {borderTopRightRadius: cornerRadius + 'px'}
  : corner === 2 ? {borderBottomLeftRadius: cornerRadius + 'px'}
  : corner === 3 ? {borderBottomRightRadius: cornerRadius + 'px'}
  : {}  

  return(
    <div className={`square ${situation}`} id={id} style={cornerStyle}>
      
    </div>
  )
}

export default Squares