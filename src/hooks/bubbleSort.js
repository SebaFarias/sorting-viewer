const bubbleSort = {
  initial: (size, generate) => {
    return {
      array: generate(size),
      i: 0,
      j: 0,
    }
  } ,
  step: ({array , i, j}, setBars, run, speed) => {
    if(run && i + 1 < array.length ) setTimeout( () => {
      console.log(j)
      const newArray = [...array]
      const n = newArray.length
      let newI = i
      let newJ = j
      newArray.map( (bar,index) => {
        bar.state = 'new'
        if(index > n - newI - 1) bar.state = 'sorted'
      })
      newArray[j].state = 'selected'
      if(newArray[j].heigth > newArray[j+1].heigth){
        const temp = { heigth: newArray[j].heigth , state: 'selected'}
        newArray[j] = { heigth: newArray[j+1].heigth , state: 'new'}
        newArray[j+1] = temp
      }else{
        newArray[j].state = 'new'
        newArray[j+1].state = 'selected'
      }
      if(newJ + newI + 2 >= n){
        newI++
        newJ = 0
      }else{
        newJ++
      }
      if(newI + 1 >= n){
        newArray[0].state = 'sorted'
        newArray[1].state = 'sorted'
      }
      setBars({ 
        array: newArray,
        i: newI,
        j: newJ,
      })
    },speed)
  },
}

export default bubbleSort