const breadthFirstSearch = {
  initial: () => {
    return {
      start: false,
      destination: false,
      frontier:[],
      cameFrom:{},
      current: false,
      i:0,
      path: [],

    }
  }, 
  step: (array,{start,destination,frontier,cameFrom,current,i,path}) => {
    const newArray = [...array]
    const newStart = [...start]
    const newDestination = [...destination]
    const newFrontier = [...frontier]
    const newCameFrom = {...cameFrom}
    let newPath = [...path] 
    let newCurrent = current
    let newI = i
    if(newI<0)return [newArray,false]
    if(newPath.length>0){
      const nextStep = newPath.shift()
      newArray[nextStep[0]][nextStep[1]].state = 'path'
      if(newPath.length<1)newI = -1
    }else{
      if(newCameFrom[`${newDestination[0]}-${newDestination[1]}`])return [newArray,
        {
          start: newStart,
          destination: newDestination,
          frontier: newFrontier,
          cameFrom: newCameFrom,
          current: newCurrent,
          i: newI,
          path: getPath(newCameFrom,newDestination,newStart),
        }]
        if(newFrontier.length == 0) {
          return[newArray,false]
        }
        if(!newCurrent) newCurrent = newFrontier.shift() 
        if(typeof newCurrent != 'undefined' 
        && !(newStart[0]==newCurrent[0] && newStart[1]==newCurrent[1])
        && !(newDestination[0]==newCurrent[0]&&newDestination[1]==newCurrent[1])) newArray[newCurrent[0]][newCurrent[1]].state='reached'
        const neighbors = getNeighbors(newArray,newCurrent)
        const next = neighbors[newI]
        if(next){
          if(!newCameFrom[`${next[0]}-${next[1]}`]){
            newCameFrom[`${next[0]}-${next[1]}`] = newCurrent
            newFrontier.push(next)
            if(!(next[0]==newDestination[0]&&next[1]==newDestination[1]))newArray[next[0]][next[1]].state = 'frontier'
          }
        } 
        newI++
        if(newI >= neighbors.length) {
          newCurrent = false
          newI = 0
        }
    }

    return [newArray,
    {
      start: newStart,
      destination: newDestination,
      frontier: newFrontier,
      cameFrom: newCameFrom,
      current: newCurrent,
      i: newI,
      path: newPath,
    }]
  },
}
const getNeighbors = (grid,[i,j]) => {
  const neighbors = []
  if(grid[parseInt(i)-1][parseInt(j)].state !== 'wall') neighbors.push([parseInt(i)-1,parseInt(j)])
  if(grid[parseInt(i)][parseInt(j-1)].state !== 'wall') neighbors.push([parseInt(i),parseInt(j)-1])
  if(grid[parseInt(i)+1][parseInt(j)].state !== 'wall') neighbors.push([parseInt(i)+1,parseInt(j)])
  if(grid[parseInt(i)][parseInt(j)+1].state !== 'wall') neighbors.push([parseInt(i),parseInt(j)+1])
  return neighbors
}
const getPath = (pathMap,destination,start) => {
  const path = []
  let  current = destination
  while(!(current[0]==start[0]&&current[1]==start[1])){
    const back = pathMap[`${current[0]}-${current[1]}`] 
    if(!(back[0]==start[0]&&back[1]==start[1]))path.push(back)
    current = back
  }
  return path.reverse()
}
export default breadthFirstSearch
