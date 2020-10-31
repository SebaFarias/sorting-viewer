import React, {useContext} from 'react'
import LanguageContext from'../../language'
import './runBtn.css'

const RunBtn = ({run,toggleRun}) => {
const lang = useContext(LanguageContext)

  return(
    <div className= 'control'>
      <label className='label' htmlFor='runBtn'>{ run? lang.run.true : lang.run.false}</label>
      <button id='runBtn' className='run btn' name='run button' aria-checked={run} onClick={toggleRun}>
        <div className={run?'pause-icon':'run-icon'}></div>
      </button>
    </div>
  )
}
export default RunBtn