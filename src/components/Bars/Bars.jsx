import React, {useState} from 'react'
import Bar from '../Bar/Bar'
import './bars.css'

const Bars = ({run, size, speed, algo}) => {

  
  const generate = quantity => {
    const array = []
    for(let i = 0 ; i < quantity; i++ ){
      const heigth = Math.random() * 80 + 20
      array.push([heigth,'new'])
    }
    return array
  }
  const [bars, setBars] = useState(generate(size))
  console.log(bars);

  return(
    <main className="bars">
       {bars.map( bar => {
        return <Bar key={bar[0]} situation={bar[1]} height={bar[0]} radius={window.innerWidth/(3*size)}/>
      })}
    </main>
  )
}

export default Bars