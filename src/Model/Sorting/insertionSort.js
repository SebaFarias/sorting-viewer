const insertionSort = {
  initial: () => {
    return {
      insertion: -1, // insertion index < 0 means no insertion needed
      i: 1,
      j: 0,
    }
  },
  step: ( array, { insertion, i, j} ) => {
    if(i > array.length) return [ false , false ]
    let newArray = [...array]
    let newInsertion = insertion
    let newI = i
    let newJ = j
    if( newI == newArray.length){
      newArray = sortedColors(newArray) 
      newI++
    }else{ 
      if(newJ >= 0 && newArray[newJ].heigth > newArray[newI].heigth){
        newInsertion = newJ
        newArray = defaultColors(newArray,newInsertion,newI,newJ)
        newJ--
      }else{
        newArray = insertionColors(newArray,newInsertion,newI,newJ)
        newInsertion = -1
        newI++
        newJ = newI - 1
      }
    }
    return [ 
      newArray , 
      { 
        insertion: newInsertion,
        i: newI,
        j: newJ,
      }
    ]
  },
}
const defaultColors = (array,insertion,i) => {
  return array.map( (bar , index) => {
    bar.state = 'new'
    if( index == i ) bar.state = 'selected'
    if( index < i ) bar.state = 'inspecting'
    if( index < insertion) bar.state = 'sorted'
    return bar
  })
}
const sortedColors = array => {
  return array.map( bar => {
    bar.state = 'sorted'
    return bar
  })
}
const insertionColors = (array,insertion,i,j) => {
  return insert(array,insertion,i).map( (bar,index) => {
    bar.state = 'new'
    if( index <= i) bar.state = 'inspecting'
    if( index == insertion || (insertion == -1 && index == i)) bar.state = 'selected'
    if( index < insertion || index < j) bar.state = 'sorted'
    return bar
  })
}
const insert = (array, insertion, element) => {
  if(insertion < 0) return array
  const newArray = [...array]
  const temp = newArray[element].heigth
  for (let index = element - 1; index >= insertion; index--) {
    newArray[index + 1].heigth = newArray[index].heigth
  }
  newArray[insertion].heigth = temp
  return newArray
}
export default insertionSort