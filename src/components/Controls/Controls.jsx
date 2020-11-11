import React from 'react'
import './controls.css'
import RunBtn from '../RunBtn/RunBtn'
import AlgoBtn from '../AlgoBtn/AlgoBtn'
import SpeedBtn from '../SpeedBtn/SpeedBtn'
import SizeBtn from '../SizeBtn/SizeBtn'

const Controls = () => {
  return(
    <section>
      <article className="left-controls">
        <SizeBtn/>
        <AlgoBtn/>
      </article>
      <article className="right-controls">
        <RunBtn/>
        <SpeedBtn/>
      </article>
    </section>
  )
}

export default Controls