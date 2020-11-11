import React, {useEffect , useContext} from 'react'
import Bar from '../Bar/Bar'
import {GlobalContext} from '../../globalContext'
import './bars.css'

const Bars = () => { 

  const [global, controller] = useContext(GlobalContext)

  
  return(
    <main className="bars">
      {global.bars.map( bar => {
        return <Bar key={bar.hash} situation={bar.state} height={bar.heigth}/>
      })}
    </main>
  )
}
export default Bars