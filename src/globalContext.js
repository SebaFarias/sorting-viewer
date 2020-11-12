import React, {useState , createContext} from 'react'
import Model , { resize }from './Model/model'

const INITIAL_SIZE = 20
const INITIAL_SPEED = 200  //In milliseconds
const MAX_ARRAY_SIZE = 60
const MIN_ARRAY_SIZE = 6
const MAX_MS_BETWEEN_STEP = 1000
const MIN_MS_BETWEEN_STEP = 20

export const GlobalContext = createContext()
  
export const GlobalProvider = (props) => {
  const [state, setState] = useState({
    bars: [],
    indexes: {},
    interval: null,
    initialArray: [],
    steps: 0,
    run: false,
    speed: INITIAL_SPEED,
    size: INITIAL_SIZE,
    algorithm: false,
    sorted: false,
    onTransition: false,
  })
  const controller = {   
    pause: () => {
      setState( prevState => {
        clearInterval(prevState.interval)
        return {
          ... prevState,
          run: false}
      })
    },
    toggleRunning: () => {
      setState( prevState =>{
        if(prevState.run){
          clearInterval(prevState.interval)
          return {
            ...prevState,
            run: !prevState.run,
          }
        }
        clearInterval(prevState.interval)
        const newInterval = setInterval( () => {
          stepForward()
        },prevState.speed)
        return{
          ...prevState,
          run: !prevState.run,
          interval: newInterval,
        }  
      })
    },
    setSpeed: newSpeed => {
      setState( prevState =>{
        if(prevState.run){
          clearInterval(prevState.interval)
          const newInterval = setInterval( () => {
            stepForward()
          },newSpeed)
          return{
            ...prevState,
            speed: newSpeed,
            interval: newInterval,
        }
      }
        return {
          ...prevState,
          speed: newSpeed,
        }
      })
    },
    setSize: newSize => {
      setState( prevState => {
        const newArray = resize( prevState.bars , newSize )
        return({
          ...prevState,
          bars: newArray,
          size: newSize,
          indexes: prevState.algorithm? Model[prevState.algorithm].initial(0)[1] : {} ,
          sorted: false,
          steps: 0,
          initialArray: newArray,

        })
      })
    },
    setSliderValue: ( control , value) => {
      if( control === 'speed' ) return controller.setSpeed(Math.round( 2000 / value ))
      controller.setSize(Math.round( value * (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)/100 ) + MIN_ARRAY_SIZE)
    },
    setAlgo: newAlgo => {
      initialize(newAlgo , state.size)
    },
  }
  const initialize = ( algo , size ) => {
    setState( prevState => {
      if(!algo) return prevState
      const [ newBars , newIndexes] = Model[algo].initial(size)
      return {
        ...prevState,
        algorithm: algo,
        bars: newBars,
        indexes: newIndexes,
        initialArray: newBars,
        steps: 0,
        sorted: false,
      }
    })
  }
  const stepForward = () => {
    setState( prevState => {
      if( prevState.sorted || !prevState.algorithm ) return prevState 
      const [ newBars , newIndexes ] = Model[prevState.algorithm].step( prevState.bars , prevState.indexes )
      if( newBars ) return {
        ...prevState,
        bars: newBars,
        indexes: newIndexes,
        steps: prevState.steps + 1,
      } 
      clearInterval(prevState.interval)
      return{
        ...prevState,
        steps: prevState.steps + 1,
        run: false,
        sorted: true,
      }
    })
  }
  const stepBackwards = () => {

  }
  return (
    <GlobalContext.Provider value={[state , controller]}>
      {props.children}
    </GlobalContext.Provider>
  )
}
