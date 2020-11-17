import React, {useContext,useEffect} from 'react'
import LanguageContext from '../../language'
import {GlobalContext} from '../../globalContext'
import './fullScreenBtn.css'

const FullscreenBtn = () => {

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
    <div className='control fullscreen'>
      <label className='label' htmlFor='fullscreenBtn'>{ lang.fullscreen }</label>      
      <button 
        id='fullscreenBtn' 
        className='fullscreen btn' 
        name='fullscreen button' 
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

export default FullscreenBtn