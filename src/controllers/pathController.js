import Model , { generate } from '../Model/PathFinding/model'

const MAX_ARRAY_SIZE = 60
const MIN_ARRAY_SIZE = 6

const generateController = setState => {
  const controller = {
    toggleMode: () => {
      setState( prevState => {
        return{
          ...prevState,
          mode: 'sort',
          algorithm: false,
        }
      })
    },
    setAlgo: newAlgo => {
      controller.initialize(newAlgo)
    },
    initialize : algo => {
      setState( prevState => {
        if(!algo) return prevState
        const [ newGrid , newIndexes] = Model[algo].initial(prevState.size)
        return {
          ...prevState,
          algorithm: algo,
          data: newGrid,
          indexes: newIndexes,
          initialArray: newGrid,
          steps: 0,
          finished: false,
        }
      })
    },
    setSliderValue: ( control , value) => {
      if( control === 'speed' ) return controller.setSpeed(Math.round( 2000 / value ))
      controller.setSize(Math.round( value * (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)/100 ) + MIN_ARRAY_SIZE)
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
        const newArray = generate( newSize )
        return({
          ...prevState,
          data: newArray,
          size: newSize,
          indexes: prevState.algorithm? Model[prevState.algorithm].initial(0)[1] : {} ,
          finished: false,
          steps: 0,
          initialArray: newArray,
        })
      })
    },
    handleClick: ( e , global ) => {
      if(global.finished){
        controller.initialize(global.algorithm,global.size)
      } else {
        const pressed = [e.target.id.split('-')[1],e.target.id.split('-')[2]]
        if(global.indexes.start){
          if(global.indexes.start === pressed){
            
          }
        }
        
      }  
    },
  }
  return controller
}

export default generateController

