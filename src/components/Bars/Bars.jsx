import React, { useContext } from 'react'
import Bar from '../Bar/Bar'
import {GlobalContext} from '../../globalContext'
import NoAlgoCard from '../NoAlgoCard/NoAlgoCard'
import './bars.css'

const Bars = () => { 

  const global = useContext(GlobalContext)[0]
  
  return(
    <main className="bars">
      {!global.algorithm? <NoAlgoCard target='algoSelector' before='algoBtn'/> : global.bars.map( bar => {
        return <Bar key={bar.hash} situation={bar.state} height={bar.heigth}/>
      })}
    </main>
  )
}
export default Bars