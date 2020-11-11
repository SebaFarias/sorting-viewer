import React, {useState,useContext} from 'react'
import LanguageContext from '../../language'
import {GlobalContext} from '../../globalContext'
import './algoBtn.css'

const AlgoSelector = () => {
  const lang = useContext(LanguageContext)
  const [ global , controller ] = useContext(GlobalContext)
  const [ selected , setSelected ] = useState({
    option: global.algorithm,
    selecting: false,
  })
  const algoList = Object.keys(lang.algorithms)
  const handleButtonClick = () => {
    document.getElementById('runBtn').parentElement.classList.add('hide')
    setSelected({
      ...selected,
      selecting:true})
  }
  const handleChange = event => {
    const newAlgo = event.target.value
    setSelected({
      option: newAlgo,
      selecting: false,
    })
    document.getElementById('runBtn').parentElement.classList.remove('hide')
    controller.setAlgo(newAlgo)
  }
  const cancelSelection = () => {
    document.getElementById('runBtn').parentElement.classList.remove('hide')
    setSelected({
      ...selected,
      selecting:false})
  }

  return(
    <div className= 'control'>
    <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>
    
    { selected.selecting ?
    
    <select className='algo-select' value={global.algorithm} onChange={handleChange}>
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