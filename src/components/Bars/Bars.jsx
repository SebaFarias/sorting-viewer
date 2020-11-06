import React, {useState} from 'react'
import Bar from '../Bar/Bar'
import './bars.css'

const Bars = ({run, size, speed, algo}) => {
 
  const generate = quantity => {
    const array = []
    for(let i = 0 ; i < quantity; i++ ){
      const heigth = Math.random() * 80 + 20
      array.push([heigth,'new'])
    }
    return array
  }
  const [bars, setBars] = useState({ 
    array: generate(size),
    minIndex: 0,
    i: 0,
    j: 1,
  })
  
  const selectionSort = ({array , i, j, minIndex}) => {   
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
      //next indexes
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
  const old = () => {
    setBars()
    setInterval( async bars => {
      if( i >= bars.length) return
      const newArray = [...bars]
      let minIndex = i
      setBars(newArray)
      await new Promise( r => setTimeout(r,speed))
      for (let j = i+1; j < newArray.length; j++) {
        newArray[j-1][1] = newArray[j-1][1] === 'inspecting'? 'new' : newArray[j-1][1] 
        newArray[j][1] = 'inspecting'
        if(newArray[j][0] < newArray[minIndex][0]){
          newArray[minIndex][1] = 'new'
          minIndex = j
          newArray[minIndex][1] = 'selected'
        }
        setBars(newArray)
        await new Promise( r => setTimeout(r,speed))
      }
      const temp = newArray[minIndex]
      newArray[minIndex] = newArray[i]
      newArray[i] = temp
      newArray[minIndex][1] = 'new'
      newArray[i][1] = 'sorted'
      setBars(newArray)
      await new Promise( r => setTimeout(r,speed))
      i++
    },speed)
  }
  
  if(bars.i < bars.array.length && run) setTimeout( () => selectionSort(bars) ,speed)

  return(
    <main className="bars">
       {bars.array.map( bar => {
        return <Bar key={bar[0]} situation={bar[1]} height={bar[0]} size={size}/>
      })}
    </main>
  )
}
export default Bars