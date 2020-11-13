import React , {useState, useRef, useEffect, useContext} from 'react'
import './controls.css'
import {GlobalContext} from '../../globalContext'
import RunBtn from '../RunBtn/RunBtn'
import AlgoBtn from '../AlgoBtn/AlgoBtn'
import SpeedBtn from '../SpeedBtn/SpeedBtn'
import SizeBtn from '../SizeBtn/SizeBtn'

const CONTRACT_ANIMATION_TIME = 500

const Controls = () => {

  const [ using , setUsing ] = useState({
    sizeBtn: false,
    algoBtn: false,
    speedBtn: false,
  })
  const global = useContext(GlobalContext)[0]
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect( () => {
    const handleClickOutside = event => {
      if( (using.sizeBtn || using.algoBtn) && leftRef.current && !leftRef.current.contains(event.target)){
        if(using.sizeBtn) controlsManager.closeSize()
        if(using.algoBtn && global.algorithm) controlsManager.closeAlgo()
        if(event.target === document.getElementById('speedBtn')) controlsManager.openSpeed()
      }
      if( using.speedBtn && rightRef.current && !rightRef.current.contains(event.target)){
        controlsManager.closeSpeed()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[using])

  const show = id => {
    document.getElementById(id).parentElement.classList.remove('hide')
  }
  const controlsManager = {
    openSpeed: () => {
      document.getElementById('runBtn').parentElement.classList.add('hide')
      setUsing( prevState => {
        return {
          ...prevState,
          speedBtn: true
        }
      })
    },
    openSize: () => {      
      document.getElementById('algoBtn').parentElement.classList.add('hide')
      setUsing( prevState => {
        return {
          ...prevState,
          sizeBtn: true
        }
      })
    },
    openAlgo: () => {      
      document.getElementById('sizeBtn').parentElement.classList.add('hide')
      document.getElementById('algoBtn').parentElement.classList.add('using')
      setUsing( prevState => {
        return {
          ...prevState,
          algoBtn: true
        }
      })
    },
    closeSpeed: () => {
      document.getElementById('speedScreen').classList.add('contract')
      document.getElementById('speedSelector').parentElement.classList.remove('using')
          setTimeout(() => {
            show('runBtn')
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
            show('algoBtn')
            setUsing( prevState => {
              return {
                ...prevState,
                sizeBtn: false
              }
            })
          },CONTRACT_ANIMATION_TIME)
    },
    closeAlgo: () => {
      document.getElementById('algoSelector').classList.add('contract')
      document.getElementById('algoSelector').parentElement.classList.remove('using')
          setTimeout(() => {
            show('sizeBtn')
            setUsing( prevState => {
              return {
                ...prevState,
                algoBtn: false
              }
            })
          },CONTRACT_ANIMATION_TIME)
    },
  }
  return(
    <section>
      <article className="left-controls" ref={leftRef}>
        <SizeBtn selecting ={using.sizeBtn} tools= {controlsManager}/>
        <AlgoBtn selecting ={using.algoBtn} tools= {controlsManager}/>
      </article>
      <article className="right-controls" ref={rightRef}>
        <RunBtn />
        <SpeedBtn selecting ={using.speedBtn} tools= {controlsManager}/>
      </article>
    </section>
  )
}

export default Controls