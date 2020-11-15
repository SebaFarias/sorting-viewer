import React, { useContext } from 'react'
import Bar from '../Bar/Bar'
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
      {!global.algorithm? <NoAlgoCard target='algoSelector' before='algoBtn'/> : global.bars.map( bar => {
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
export default Bars