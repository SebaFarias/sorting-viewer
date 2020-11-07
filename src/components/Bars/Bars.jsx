import React, {useState} from 'react'
import Bar from '../Bar/Bar'
import Algorithm from '../../hooks/algorithm'
import './bars.css'

const Bars = ({run, size, speed, algo}) => { 
  
  const [bars, setBars] = useState( Algorithm[algo].initial(size))
  
  Algorithm[algo].step(bars, setBars, run, speed)

  return(
    <main className="bars">
      {bars.array.map( bar => {
        return <Bar key={bar.hash} situation={bar.state} height={bar.heigth} size={size}/>
      })}
    </main>
  )
}
export default Bars