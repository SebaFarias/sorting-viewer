import React, {useState , createContext} from 'react'
import sortingController from './controllers/SortController'
import pathController from './controllers/pathController'

const INITIAL_SIZE = 30
const INITIAL_SPEED = 800  //In milliseconds

export const GlobalContext = createContext()
  
export const GlobalProvider = (props) => {
  const [state, setState] = useState({
    data: [],
    indexes: {},
    interval: null,
    initialArray: [],
    steps: 0,
    run: false,
    speed: INITIAL_SPEED,
    size: INITIAL_SIZE,
    mode: 'sort',
    algorithm: false,
    finished: false,
    onTransition: false,
    fullscreen: false,
  })

  const modes = {
    sort: sortingController(setState),
    path: pathController(setState)
  }

  return (
    <GlobalContext.Provider value={[state , modes[state.mode]]}>
      {props.children}
    </GlobalContext.Provider>
  )
}
