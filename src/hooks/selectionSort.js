const selectionSort = {
  initial: (size, generate) => {
    return { 
      array: generate(size),
      minIndex: 0,
      i: 0,
      j: 1,
    }
  },
  step: ({array , i, j, minIndex}, setBars, run, speed) => {
    if(run && i < array.length) setTimeout( () => {
      const newArray = [...array]
      const n = newArray.length
      let newI = i
      let newJ = j
      let newMinIndex = minIndex    
      if(j == i+1 ) newArray[n-1].state = 'new'
      newArray[j].state = 'inspecting'
      newArray[j-1].state = newArray[j-1].state === 'inspecting'? 'new' : newArray[j-1].state
      if(newArray[minIndex].heigth > newArray[j].heigth){
        newArray[minIndex].state = 'new'
        newArray[j].state = 'selected'
        newMinIndex = j
      }
      if(newJ + 1 >= n){
        const temp = newArray[newMinIndex].heigth
        newArray[newMinIndex] = { heigth: newArray[i].heigth, state: 'new'}
        newArray[i] = {heigth: temp, state: 'sorted'}
        newI++
        newMinIndex = newI
        if(newI < n){
          newArray[newI].state = 'selected'
        }else{
          newArray[newI-1].state = 'sorted'
        }
        newJ = newI + 1
      }else{
        newJ++
      }
      if(newI + 1 >= n){
        newJ = newI  
      }
      setBars({ 
        array: newArray,
        minIndex: newMinIndex,
        i: newI,
        j: newJ,
      })
    } 
    ,speed)}}

    export default selectionSort