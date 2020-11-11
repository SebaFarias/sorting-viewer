import React from 'react'
import './controls.css'
import RunBtn from '../RunBtn/RunBtn'
import AlgoSelector from '../AlgoSelector/AlgoSelector'
import SpeedBtn from '../SpeedBtn/SpeedBtn'
import SizeBtn from '../SizeBtn/SizeBtn'

const Controls = () => {
  return(
    <section>
      <article className="left-controls">
        <SizeBtn/>
        <AlgoSelector/>
      </article>
      <article className="right-controls">
        <RunBtn/>
        <SpeedBtn/>
      </article>
    </section>
  )
}

export default Controls