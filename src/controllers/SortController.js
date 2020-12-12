import Model , { resize } from '../Model/Sorting/model'


const MAX_ARRAY_SIZE = 60
const MIN_ARRAY_SIZE = 6

const generateController = setState => { 
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
      toggleMode: () => {
        setState( prevState => {
          return{
            ...prevState,
            mode: 'path',
            algorithm: false,
          }
        })
      },
      setFullScreen: newState => {
        setState( prevState => {
          return{
            ...prevState,
            fullscreen:newState}
        })
      },
      toggleFullScreen: () => {
        setState( prevState => {
          if(prevState.fullscreen) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
              document.msExitFullscreen();
            }
          }else{
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
              elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
              elem.msRequestFullscreen();
            }
          }
          return{
            ...prevState,
            fullscreen: !prevState.fullscreen,
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
          const newArray = resize( prevState.data , newSize )
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
      setSliderValue: ( control , value) => {
        if( control === 'speed' ) return controller.setSpeed(Math.round( 2000 / value ))
        controller.setSize(Math.round( value * (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)/100 ) + MIN_ARRAY_SIZE)
      },
      setAlgo: newAlgo => {
        controller.initialize(newAlgo)
      },
      initialize : ( algo ) => {
        setState( prevState => {
          if(!algo) return prevState
          const [ newBars , newIndexes] = Model[algo].initial(prevState.size)
          return {
            ...prevState,
            algorithm: algo,
            data: newBars,
            indexes: newIndexes,
            initialArray: newBars,
            steps: 0,
            finished: false,
          }
        })
      },
    }
    const stepForward = () => {
      setState( prevState => {
        if( prevState.finished || !prevState.algorithm ) return prevState 
        const [ newBars , newIndexes ] = Model[prevState.algorithm].step( prevState.data , prevState.indexes )
        if( newBars ) return {
          ...prevState,
          data: newBars,
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
    }
    const stepBackwards = () => {

    }
    return controller 
  }
  export default generateController