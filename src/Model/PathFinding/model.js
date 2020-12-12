import breadthFirstSearch from './breadthFirstSearch'

const Algorithms = {
  breadthFirstSearch: {
    initial: size => {
      return [ generate( size ) , breadthFirstSearch.initial() ]
    },
    setStart: ( array , [i,j] , indexes ) => {
      return setStart( array , [i,j] , indexes )
    },
    removeStart: ( array , indexes ) => {
      return removeStart( array , indexes )
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
const resize = ( oldArray , newSize ) => {

}

export { resize , generate }
export default Algorithms


