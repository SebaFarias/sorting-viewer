import React from 'react'
import { Language } from '../../language'
import './controls.css'
import RunBtn from '../RunBtn/RunBtn'
import RangeSelector from '../RangeSelector/RangeSelector'
import AlgoSelector from '../AlgoSelector/AlgoSelector'

const Controls = () => {
  return(
    <section>
      <article className="left-controls">
        <RunBtn/>
        <RangeSelector/>
      </article>
      <article className="right-controls">
        <RangeSelector/>
        <AlgoSelector/>
      </article>
    </section>
  )
}

export default Controls