import React , {useState, useRef, useEffect} from 'react'
import './controls.css'
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
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect( () => {
    const handleClickOutside = event => {
      if( leftRef.current && !leftRef.current.contains(event.target)){
        if(using.sizeBtn || using.algoBtn){
          document.getElementById(using.sizeBtn?'sizeSelector':'algoSelector').classList.add('contract')
          document.getElementById(using.sizeBtn?'sizeSelector':'algoSelector').parentElement.classList.remove('using')
          setTimeout(() => {
            showAll()
            setUsing({sizeBtn: false, algoBtn: false, speedBtn: false,})
          },CONTRACT_ANIMATION_TIME)
        }
      }
      if( using.speedBtn && rightRef.current && !rightRef.current.contains(event.target)){
        document.getElementById('speedSelector').classList.add('contract')
        document.getElementById('speedSelector').parentElement.classList.remove('using')
        setTimeout(() => {
          showAll()
          setUsing({sizeBtn: false,algoBtn: false,speedBtn: false,})
        },CONTRACT_ANIMATION_TIME)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[using])

  const showAll = () => {
    const buttons = document.querySelectorAll('.control')
    buttons.forEach( btn => {
      btn.classList.remove('hide')
    })
  }
  const controlsManager = {
    openSpeed: () => {
      document.getElementById('runBtn').parentElement.classList.add('hide')
      setUsing({ sizeBtn: false, algoBtn: false,speedBtn: true,
      })
    },
    openSize: () => {      
      document.getElementById('algoBtn').parentElement.classList.add('hide')
      setUsing({ sizeBtn: true,algoBtn: false,speedBtn: false,})
    },
    openAlgo: () => {      
      document.getElementById('sizeBtn').parentElement.classList.add('hide')
      document.getElementById('algoBtn').parentElement.classList.add('using')
      setUsing({sizeBtn: false,algoBtn: true,speedBtn: false,})
    },
    usedAlgo: () => {
      document.getElementById('algoSelector').classList.add('contract')
      document.getElementById('algoSelector').parentElement.classList.remove('using')
          setTimeout(() => {
            showAll()
            setUsing({sizeBtn: false, algoBtn: false, speedBtn: false,})
          },200)
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