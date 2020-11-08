const bubbleSort = {
  initial: generated => {
    return {
      algo: 'bubbleSort',
      array: generated,
      i: 0,
      j: 0,
    }
  } ,
  step: ({array , i, j}, setBars, run, speed) => {
    if(run && i < array.length ) setTimeout( () => {      
      const n = array.length
      let newArray = [...array]
      let newI = i
      let newJ = j      
      if( i +  1 < n && array[j].heigth > array[j+1].heigth) newArray = swap(newArray,newJ)
      newArray = defaultColors(newArray,newI,newJ)
      if(newJ + newI + 2 >= n){
        newI++
        newJ = 0
      }else{
        newJ++
      }
      setBars({ 
        algo: 'bubbleSort',
        array: newArray,
        i: newI,
        j: newJ,
      })
    },speed)
  },
}
const defaultColors = (array,i,j) => {
  const n = array.length
  return array.map( (bar,index) => {
    bar.state = index > n - i - 1 ? 'sorted' : 'new'
    if(index == j+1) bar.state = i+1 < n? 'selected' :'sorted'
    if(i+1 >= n && index == 0 ) bar.state = 'sorted'
    return bar
  })
}
const swap = (array,j) => {
  const temp = array[j].heigth
  return array.map( (bar,index) => {
    if(index == j) bar.heigth = array[j+1].heigth
    if(index == j + 1) bar.heigth = temp
    return bar    
  })
}

export default bubbleSort