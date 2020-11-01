import React from 'react'
import { Language } from '../../language'
import './controls.css'
import RunBtn from '../RunBtn/RunBtn'
import RangeSelector from '../RangeSelector/RangeSelector'
import AlgoSelector from '../AlgoSelector/AlgoSelector'

const Controls = ({run, size, speed, algo, toggleRun, sizeRange, speedRange, setAlgo}) => {
  return(
    <section>
      <article className="left-controls">
        <RunBtn run={run} toggleRun={toggleRun}/>
        <RangeSelector control='size' state={size} setter={sizeRange}/>
      </article>
      <article className="right-controls">
        <RangeSelector control='speed' state={speed} setter={speedRange}/>
        <AlgoSelector algo={algo} setAlgo={setAlgo}/>
      </article>
    </section>
  )
}

export default Controls