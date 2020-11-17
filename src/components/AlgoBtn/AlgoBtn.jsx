import React, {useContext} from 'react'
import LanguageContext from '../../language'
import {GlobalContext} from '../../globalContext'
import './fullScreenBtn.css'

const AlgoSelector = () => {

  const lang = useContext(LanguageContext)
  const controller  = useContext(GlobalContext)[1]

  const handleButtonClick = () => {
    controller.toggleFullScreen()
  }

  return(
    <div className='control algo'>
      <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>      
      <button 
        id='algoBtn' 
        className='algo btn' 
        name='algo button' 
        onClick={handleButtonClick}
      >
        <div className= 'algo-icon'></div>
      </button>      
    </div>
  )
}

export default AlgoSelector