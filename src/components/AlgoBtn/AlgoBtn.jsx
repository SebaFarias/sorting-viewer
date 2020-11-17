import React, {useContext,useEffect} from 'react'
import LanguageContext from '../../language'
import {GlobalContext} from '../../globalContext'
import './fullScreenBtn.css'

const AlgoSelector = () => {

  const lang = useContext(LanguageContext)
  const controller  = useContext(GlobalContext)[1]

  const handleButtonClick = () => {
    controller.toggleFullScreen()
  }
  useEffect( () => {
    const checkFullScreen = () => {
      controller.setFullScreen(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen)  
    }
    document.addEventListener('fullscreenchange', checkFullScreen )
    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen)
    }
  },)
  
  
  return(
    <div className='control algo'>
      <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>      
      <button 
        id='algoBtn' 
        className='algo btn' 
        name='algo button' 
        onClick={handleButtonClick}
      >
        <div className= 'fullscreen-icon'>
          <div className={global.fullScreen?'on corner':'corner'}></div>
          <div className={global.fullScreen?'on corner':'corner'}></div>
          <div className={global.fullScreen?'on corner':'corner'}></div>
          <div className={global.fullScreen?'on corner':'corner'}></div>
        </div>
      </button>      
    </div>
  )
}

export default AlgoSelector