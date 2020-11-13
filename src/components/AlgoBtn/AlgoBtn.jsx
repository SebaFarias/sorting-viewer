import React, {useContext} from 'react'
import LanguageContext from '../../language'
import {GlobalContext} from '../../globalContext'
import './algoBtn.css'

const AlgoSelector = ({ selecting , tools }) => {

  const lang = useContext(LanguageContext)
  const [ global , controller ] = useContext(GlobalContext)
  const algoList = Object.keys(lang.algorithms)

  const handleButtonClick = () => {
    tools.openAlgo()
  }
  const handleChange = event => {
    controller.setAlgo(event.target.value)
    tools.closeAlgo()
  }

  return(
    <div className='control algo'>
      <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>      
      { selecting ?      
      <select 
        id='algoSelector' 
        className='algo-select' 
        value={global.algorithm} 
        onChange={handleChange}
        defaultValue=''
      >
        <option value='' hidden>{lang.algoSelectPlaceholder}</option>
        {algoList.map( algoName =>{
          return <option key={algoName} value={algoName}>{lang.algorithms[algoName]}</option>
        })}
      </select>      
      :      
      <button 
        id='algoBtn' 
        className='algo btn' 
        name='algo button' 
        onClick={handleButtonClick}
      >
        <div className= 'algo-icon'></div>
      </button>
      }
    </div>
  )
}

export default AlgoSelector