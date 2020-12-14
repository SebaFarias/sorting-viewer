import breadthFirstSearch from './breadthFirstSearch'

const Algorithms = {
  breadthFirstSearch: {
    initial: size => {
      return [ generate( size ) , breadthFirstSearch.initial() ]
    },
    setStart: ( array , pressed , indexes ) => {
      return setStart( array , pressed , indexes )
    },
    removeStart: ( array , indexes ) => {
      return removeStart( array , indexes )
    },
    setDestination: ( array , pressed , indexes ) => {
      return setDestination( array , pressed , indexes )
    },
    removeDestination: ( array , indexes ) => {
      return removeDestination( array , indexes )
    },
    step: ({}) => {
      return breadthFirstSearch.step()
    },
  },
}

const generate = quantity => {
  const array = []
  for(let i = 0 ; i < quantity; i++ ){
    const row = []
    for (let j = 0; j < quantity; j++) {
      let newState = 'new'
      if(i===0 || j===0 || i===quantity-1 || j===quantity-1 ) newState = 'wall'
      row.push({
        state: newState,
      })
    }
    array.push(row)
  }
  return array
}
const setStart = ( array , [i,j] , indexes ) => {
  const newArray = array
  const newIndexes = {...indexes}
  if(newIndexes.destination[0] == i && newIndexes.destination[1] == j) newIndexes.destination = false
  newArray[i][j].state = 'start'
  newIndexes.start = [i,j]
  return [ newArray , newIndexes ]
}
const removeStart = ( array, indexes ) => {
  const newArray = array
  const newIndexes = {...indexes}
  newArray[indexes.start[0]][indexes.start[1]].state = 'new'
  newIndexes.start = false
  return [ newArray , newIndexes ]
}
const setDestination = ( array , [i,j] , indexes ) => {
  const newArray = array
  const newIndexes = {...indexes}
  newArray[i][j].state = 'destination'
  newIndexes.destination = [i,j]
  return [ newArray , newIndexes ]
}
const removeDestination = ( array, indexes ) => {
  const newArray = array
  const newIndexes = {...indexes}
  newArray[indexes.destination[0]][indexes.destination[1]].state = 'new'
  newIndexes.destination = false
  return [ newArray , newIndexes ]
}
const resize = ( oldArray , newSize ) => {

}

export { resize , generate }
export default Algorithms


