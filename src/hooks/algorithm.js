import selectionSort from './selectionSort'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'

const generate = quantity => {
  const array = []
  for(let i = 0 ; i < quantity; i++ ){
    array.push({
      heigth: Math.random() * 80 + 20,
      state: 'new',
      hash: Math.random().toString(36).substring(2,11)
        + Math.random().toString(36).substring(2,11)
        + Math.random().toString(36).substring(2,11)
    })
  }
  return array
}
const Algorithm = {
  selectionSort: {
    initial: size => selectionSort.initial(size, generate) ,    
    step: ({array , i, j, minIndex}, setBars, run, speed) =>{
      selectionSort.step({array , i, j, minIndex}, setBars, run, speed) 
    },
  },
    bubbleSort: {
    initial: size => bubbleSort.initial(size, generate) ,
    step: ({array , i, j}, setBars, run, speed) => {
      bubbleSort.step({array , i, j}, setBars, run, speed)
    },
  },
  insertionSort: {
    initial: size => insertionSort.initial(size, generate) ,
    step: ({array, insertion, i, j}, setBars, run, speed) => {
      insertionSort.step({array, insertion, i, j}, setBars, run, speed)
    },
  },
}

export default Algorithm