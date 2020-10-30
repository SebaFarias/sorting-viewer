import React, {useContext} from 'react'
import LangContext from '../../language'
import './langToggler.css'

const LangToggler = ({state, toggle}) => {
  
  const lang = useContext(LangContext)

  return(
    <div className="toggler-container" onClick={toggle}>
      <button 
        className="indicator"
        name="language toggler"
        type="button"
        role="switch"
        aria-checked={state}
        style={lang.toggle}
      ></button>
      <div className="labels">
        <h4 style={{textShadow: `0px 1px 0.05em rgba(37, 43, 59, ${state?'0.3':'0.8'})`}}>EN</h4>
        <h4 style={{textShadow: `0px 1px 0.05em rgba(37, 43, 59, ${state?'0.8':'0.3'})`}}>ES</h4>
      </div>
    </div>
  )
}

export default LangToggler