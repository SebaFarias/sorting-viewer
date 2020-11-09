import React, {useState,useContext} from 'react'
import LanguageContext from '../../language'
import './algoSelector.css'

const AlgoSelector = ({algo, setAlgo}) => {
  const lang = useContext(LanguageContext)
  const [ selected , setSelected ] = useState({
    option: algo,
    selecting: false,
  })
  const algoList = Object.keys(lang.algorithms)
  const handleButtonClick = () => {
    document.getElementById('sizeBtn').parentElement.classList.add('hide')
    setSelected({
      option: algo,
      selecting:true})
  }
  const handleChange = event => {
    const newAlgo = event.target.value
    setSelected({
      option: newAlgo,
      selecting: false,
    })
    document.getElementById('sizeBtn').parentElement.classList.remove('hide')
    setAlgo(newAlgo)
  }

  return(
    <div className= 'control'>
    <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>
    
    { selected.selecting ?
    
    <select className='algo-select' value={algo} onChange={handleChange}>
      {algoList.map( algoName =>{
        return <option key={algoName} value={algoName}>{lang.algorithms[algoName]}</option>
      })}
  </select>
    
    :
    
    <button id='algoBtn' className='algo btn' name='algo button' onClick={handleButtonClick}>
      <div className= 'algo-icon'></div>
    </button>
    }

  </div>
  )
}
export default AlgoSelector