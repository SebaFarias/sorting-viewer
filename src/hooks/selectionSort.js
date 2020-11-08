const selectionSort = {
  initial: generated => {
    return {
      algo: 'selectionSort',
      array: generated,
      minIndex: 0,
      i: 0,
      j: 1,
    }
  },
  step: ({array , i, j, minIndex}, setBars, run, speed) => {
    if(run && i < array.length) setTimeout( () => {
      let newArray = [...array]
      const n = newArray.length
      let newI = i
      let newJ = j
      let newMinIndex = minIndex    
      if(newJ < n && newArray[minIndex].heigth > newArray[j].heigth){
        newMinIndex = j
      }
      newArray = defaultColors(newArray,newMinIndex,newI,newJ)
      if(newJ >= n){
        newArray = swapColors(newArray,newMinIndex,newI)
        newI++
        newMinIndex = newI
        newJ = newI + 1
      }else{
        newJ++
      }
      setBars({ 
        algo: 'selectionSort',
        array: newArray,
        minIndex: newMinIndex,
        i: newI,
        j: newJ,
      })
    },speed)
  },
}
const defaultColors = (array, selected, i, j) => {
  const n = array.length
  return array.map( (bar,index) => {
    bar.state = index < i ? 'sorted' : 'new'
    if(index == j) bar.state = 'inspecting'
    if( index == selected ) bar.state = 'selected'
    return bar
  })
}
const swapColors = (array, selected, i) => {
    return swap(array,selected,i).map( (bar,index) => {
      bar.state = index <= i ? 'sorted' : 'new'
      if( index == i+1) bar.state = 'inspecting'
      return bar
    })
}
const swap = (array,selected,i) => {
  const temp = array[i].heigth
  return array.map( (bar,index) => {
    if(index == i) bar.heigth = array[selected].heigth 
    if(index == selected) bar.heigth = temp
    return bar    
  })
}
export default selectionSort