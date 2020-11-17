import React , {useState, useRef, useEffect} from 'react'
import './controls.css'
import RunBtn from '../RunBtn/RunBtn'
import FullscreenBtn from '../FullscreenBtn/FullscreenBtn'
import SpeedBtn from '../SpeedBtn/SpeedBtn'
import SizeBtn from '../SizeBtn/SizeBtn'

const CONTRACT_ANIMATION_TIME = 500

const Controls = () => {

  const [ using , setUsing ] = useState({
    sizeBtn: false,
    algoBtn: false,
    speedBtn: false,
  })
  const rightRef = useRef(null)

  useEffect( () => {
    const handleClickOutside = event => {
      if( (using.speedBtn || using.sizeBtn) && rightRef.current && !rightRef.current.contains(event.target)){
        if(using.sizeBtn) controlsManager.closeSize()
        if(using.speedBtn) controlsManager.closeSpeed()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  },[using])

  const show = id => {
    document.getElementById(id).parentElement.classList.remove('hide')
  }
  const controlsManager = {
    openSpeed: () => {
      document.getElementById('sizeBtn').parentElement.classList.add('hide')
      document.getElementById('speedBtn').parentElement.classList.add('using')
      setUsing( prevState => {
        return {
          ...prevState,
          speedBtn: true
        }
      })
    },
    openSize: () => {      
      document.getElementById('speedBtn').parentElement.classList.add('hide')
      document.getElementById('sizeBtn').parentElement.classList.add('using')
      setUsing( prevState => {
        return {
          ...prevState,
          sizeBtn: true
        }
      })
    },
    closeSpeed: () => {
      document.getElementById('speedScreen').classList.add('contract')
      document.getElementById('speedSelector').parentElement.classList.remove('using')
      setTimeout(() => {
        show('sizeBtn')
        setUsing( prevState => {
          return {
            ...prevState,
            speedBtn: false
          }
        })
      },CONTRACT_ANIMATION_TIME)
    },
    closeSize: () => {
      document.getElementById('sizeScreen').classList.add('contract')
      document.getElementById('sizeSelector').parentElement.classList.remove('using')
          setTimeout(() => {
            show('speedBtn')
            setUsing( prevState => {
              return {
                ...prevState,
                sizeBtn: false
              }
            })
          },CONTRACT_ANIMATION_TIME)
    },
  }
  return(
    <section>
      <article className="left-controls">
        <RunBtn />
        <FullscreenBtn />
      </article>
      <article className="right-controls" ref={rightRef}>
        <SizeBtn selecting ={using.sizeBtn} tools= {controlsManager}/>
        <SpeedBtn selecting ={using.speedBtn} tools= {controlsManager}/>
      </article>
    </section>
  )
}

export default Controls