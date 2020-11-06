
const generate = quantity => {
  const array = []
  for(let i = 0 ; i < quantity; i++ ){
    const heigth = Math.random() * 80 + 20
    array.push([heigth,'new'])
  }
  return array
}

const Algorithm = {

selectionSort: {
  initial: size => {
    return { 
      array: generate(size),
      minIndex: 0,
      i: 0,
      j: 1,
    }
  },
  step: ({array , i, j, minIndex}, setBars, run, speed) => {
    if(i < array.length && run) setTimeout( () => {
      const newArray = [...array]
      const n = newArray.length
      let newI = i
      let newJ = j
      let newMinIndex = minIndex
  
        if(j == i+1 ) newArray[n-1][1] = 'new'
        newArray[j][1] = 'inspecting'
        newArray[j-1][1] = newArray[j-1][1] === 'inspecting'? 'new' : newArray[j-1][1]
        if(newArray[minIndex][0] > newArray[j][0]){
          newArray[minIndex][1] = 'new'
          newArray[j][1] = 'selected'
          newMinIndex = j
        }
        if(newJ + 1 >= n){
          const temp = newArray[newMinIndex][0]
          newArray[newMinIndex] = [newArray[i][0],'new']
          newArray[i] = [temp,'sorted']
          newI++
          newMinIndex = newI
          if(newI < n){
            newArray[newI][1] = 'selected'
          }else{
            newArray[newI-1][1] = 'sorted'
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
    ,speed)}},
}

export default Algorithm