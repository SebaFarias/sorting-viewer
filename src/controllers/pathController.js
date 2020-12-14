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
          controller.stepForward()
        },prevState.speed)
        return{
          ...prevState,
          run: !prevState.run,
          interval: newInterval,
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
            controller.stepForward()
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
    stepForward: () => {
      setState( prevState => {
        if( prevState.finished || !prevState.algorithm || !prevState.indexes.start || !prevState.indexes.destination ) return prevState 
        const [ newGrid , newIndexes ] = Model[prevState.algorithm].step( prevState.data , prevState.indexes )
        if( newIndexes ) return {
          ...prevState,
          data: newGrid,
          indexes: newIndexes,
          steps: prevState.steps + 1,
        } 
        clearInterval(prevState.interval)
        return{
          ...prevState,
          steps: prevState.steps + 1,
          run: false,
          finished: true,
        }
      })
    },
    handleClick: event => {
      const cell = event.target.classList.contains('square')? event.target : false
      setState( prevState => {
        const startingPoint = prevState.indexes.start
        const destinationPoint = prevState.indexes.destination
        if(prevState.finished) return restart(prevState)
        const pressed = cell && notBorder(prevState.size,cell)? [cell.id.split('-')[1],cell.id.split('-')[2]] : false
        if(pressed){
          if(!startingPoint) return setStart(prevState,pressed)
          if(startingPoint[0] == pressed[0] && startingPoint[1] == pressed[1]) return removeStart(prevState)
          if(destinationPoint && destinationPoint[0] == pressed[0] && destinationPoint[1] == pressed[1]) return removeDestination(prevState)
          if(!destinationPoint)return setDestination(prevState,pressed)  
        }
          console.log('building...')
          return{...prevState}
      })
    },   
  }
  return controller
}
const notBorder = (max,cell) => {
  if(!cell) return false
  if(cell.id.split('-')[1] == 0 || cell.id.split('-')[1] == max-1 
  || cell.id.split('-')[2] == 0 || cell.id.split('-')[2] == max-1) return false 
  return true
}
const restart = prevState => {
  const [ newGrid , newIndexes] = Model[prevState.algorithm].initial(prevState.size)
  return {
    ...prevState,
    algorithm: prevState.algorithm,
    data: newGrid,
    indexes: newIndexes,
    initialArray: newGrid,
    steps: 0,
    finished: false,
  }
}
const removeStart = prevState => {
  const [ newGrid , newIndexes ] = Model[prevState.algorithm].removeStart(prevState.data,prevState.indexes)
    return {
      ...prevState,
      data: newGrid,
      indexes:  newIndexes,
    }
}
const setStart = ( prevState , pressed ) => {
  const [ newGrid , newIndexes ] = Model[prevState.algorithm].setStart(prevState.data,pressed,prevState.indexes)
  return {
    ...prevState,
    data: newGrid,
    indexes:  newIndexes,
  }
}
const removeDestination = prevState => {
  const [ newGrid , newIndexes ] = Model[prevState.algorithm].removeDestination(prevState.data,prevState.indexes)
    return {
      ...prevState,
      data: newGrid,
      indexes:  newIndexes,
    }
}
const setDestination = ( prevState , pressed ) => {
  const [ newGrid , newIndexes ] = Model[prevState.algorithm].setDestination(prevState.data,pressed,prevState.indexes)
  return {
    ...prevState,
    data: newGrid,
    indexes:  newIndexes,
  }
}

export default generateController

