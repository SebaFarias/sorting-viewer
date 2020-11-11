import selectionSort from './selectionSort'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'

const Algorithms = {
  selectionSort: {
    initial: size => {
      return [ generate( size ) , selectionSort.initial() ] 
    },    
    resize: ( array , newSize ) => {
      return [ resize( array , newSize ) , selectionSort.initial() ]
    },
    step: ( array , { i , j , minIndex } ) => {
      selectionSort.step( array , { i , j , minIndex } ) 
    },
  },
  bubbleSort: {
    initial: size => {
      return [ generate( size ) , bubbleSort.initial() ] 
    },
    resize: ( array , newSize ) => {
      return [ resize( array , newSize ) , bubbleSort.initial() ]
    },
    step: ( array , { i , j } ) => {
      bubbleSort.step( array , { i , j } )
    },
  },
  insertionSort: {
    initial: size => {
      return [ generate(size) , insertionSort.initial() ] 
    },
    resize: (array,newSize) => {
      return [ resize(array,newSize) , insertionSort.initial() ] 
  },
    step: ( array , { insertion , i , j } ) => {
      insertionSort.step( array , { insertion , i , j } )
    },
  },
}
const generate = quantity => {
  const array = []
  for(let i = 0 ; i < quantity; i++ ){
    array.push({
      heigth: Math.random() * 80 + 20 ,
      state: 'new',
      hash: Math.random().toString(36).substring(2,11)
        + Math.random().toString(36).substring(2,11) ,
    })
  }
  return array
}
const resize = ( array , newSize ) => {
  const tempArray = [...array]
  const delta = newSize - array.length
  if(delta == 0) return array
  if(delta > 0){
    for (let i = 0; i < delta; i++) {
      tempArray.push({
        heigth: Math.random() * 80 + 20 ,
        state: 'new',
        hash: Math.random().toString(36).substring(2,11)
        + Math.random().toString(36).substring(2,11) , 
      })
    }
  }else{
    for (let i = delta; i < 0; i++) {
      tempArray.pop()
    }
  }
  return tempArray.map( bar => {
    bar.state = 'new'
    return bar
  })
}
export { resize , generate }
export default Algorithms