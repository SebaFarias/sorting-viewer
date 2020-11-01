import React, {useContext} from 'react'
import LanguageContext from '../../language'
import './algoSelector.css'

const AlgoSelector = ({algo, setAlgo}) => {
  
  const lang = useContext(LanguageContext)

  return(
    <div className= 'control'>
    <label className='label' htmlFor='algoBtn'>{ lang.algo }</label>
    <button id='algoBtn' className='algo btn' name='algo button' onClick={setAlgo}>
      <div className= 'algo-icon'></div>
    </button>
  </div>
  )
}
export default AlgoSelector