import React, {useContext} from 'react'
import LanguageContext from'../../language'
import {GlobalContext} from '../../globalContext'
import './runBtn.css'

const RunBtn = () => {

const lang = useContext(LanguageContext)
const [ global , controller ] = useContext(GlobalContext)

  return(    
        <div className= 'control run'>
          <label className='label' htmlFor='runBtn'>{ global.run? lang.run.true : lang.run.false}</label>
          <button id='runBtn' className='run btn' name='run button' aria-checked={global.run} onClick={controller.toggleRunning}>
            <div className={`run-button ${global.run?'pause-icon':'run-icon'}`}></div>
          </button>
        </div>
  )
}
export default RunBtn