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
      const squareWidth = Math.min(( 0.83572 * window.innerWidth - 14.8)/ global.size , 40)
      setGridStyle({
        gridTemplateColumns: `repeat(${global.size}, ${squareWidth}px)`,
        gridTemplateRows: `repeat(${global.size}, ${squareWidth}px)`,
        border: '3px solid white',
        borderRadius: '5px'
      })
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [global.size]); 

  return(
    <main className="squares-container" onClick={ e =>{controller.handleClick( e , global )}}>
      <div className="squares" style={global.algorithm? gridStyle: {}}>
        {!global.algorithm? 
        <NoAlgoCard/> 
        : 
        global.data.map( (row,i) => {
          return row.map( (square,j) => {
            let corner = false
            if( i===0 && j===0 ) corner = 0
            if( i===0 && j=== global.size-1 ) corner = 1
            if( i===global.size-1 && j=== global.size-1 ) corner = 2
            if( i===global.size-1 && j===0 ) corner = 3
            return <Square id={`square-${i}-${j}`} key={`${i}-${j}`} situation={square.state} corner={corner}/>
          })
        })}
        {global.finished? 
        <button 
        className='restartBtn' 
        onClick={restart}
        >{lang.restart}</button>:''}
      </div>
    </main>
  )
}

const Square = ({ id, situation , corner}) => {
  const cornerRadius = 8 
  const cornerStyle = corner === 0? {borderTopLeftRadius: cornerRadius + 'px'} 
  : corner === 1 ? {borderTopRightRadius: cornerRadius + 'px'}
  : corner === 2 ? {borderBottomRightRadius: cornerRadius + 'px'}
  : corner === 3 ? {borderBottomLeftRadius: cornerRadius + 'px'}
  : {}  

  return(
    <div className={`square ${situation}`} id={id} style={cornerStyle}>
      
    </div>
  )
}

export default Squares