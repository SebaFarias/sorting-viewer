const insert = (array, insertion, element) => {
  if(insertion < 0) return array
  const newArray = [...array]
  const temp = newArray[element].heigth
  for (let index = element - 1; index >= insertion; index--) {
    newArray[index + 1].heigth = newArray[index].heigth
    newArray[index + 1].state = 'selected'    
  }
  newArray[insertion].heigth = temp
  newArray[insertion].state = 'inspecting'
  return newArray
}

const insertionSort = {
  initial: (size, generate) => {
    return {
      array: generate(size),
      insertion: -1,
      i: 1,
      j: 0,
    }
  },
  step: ({array, insertion, i, j}, setBars, run, speed) => {
    if(run && i <= array.length) setTimeout( () => {
      let newArray = [...array]
      let newInsertion = insertion
      let newI = i
      let newJ = j
      if( newI == newArray.length){
        for( let index = 0 ; index < newArray.length ; index++ ){
          newArray[index].state = 'sorted'
        }
        return setBars({ array: newArray })
      } 
      if(newJ >= 0 && newArray[newJ].heigth > newArray[newI].heigth){
        newInsertion = newJ
        for( let index = 0 ; index < newArray.length ; index++ ){
          newArray[index].state = 'new'
          if( index == newI) newArray[index].state = 'inspecting'
          if( index < newI) newArray[index].state = 'selected'
          if( index < newInsertion || index < newJ) newArray[index].state = 'sorted'
        }
        newJ--
      }else{
        newArray = insert(newArray, newInsertion, newI)
        for( let index = 0 ; index < newArray.length ; index++ ){
          newArray[index].state = 'new'
          if( index <= newI) newArray[index].state = 'selected'
          if( index == newInsertion || (newInsertion == -1 && index == newI)) newArray[index].state = 'inspecting'
          if( index < newInsertion || index < newJ) newArray[index].state = 'sorted'
        }
        newInsertion = -1
        newI++
        newJ = newI - 1
      }
      setBars({ 
        array: newArray,
        insertion: newInsertion,
        i: newI,
        j: newJ,
      })
    },speed)
  },
}
export default insertionSort