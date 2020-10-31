import React, {useContext} from 'react'
import LangContext from '../../language'
import './langToggler.css'

const LangToggler = ({eng, toggle}) => {
  
  const lang = useContext(LangContext)

  return(
    <div className="toggler-container" onClick={toggle}>
      <button 
        className={eng?"indicator en":"indicator"}
        name="language toggler"
        type="button"
        role="switch"
        aria-checked={eng}
      ></button>
      <div className="labels">
        <h4 style={eng?{color: 'rgb(220, 220, 250)'}:{color: 'rgb(100, 100, 110)'}}>EN</h4> 
        <h4 style={eng?{color: 'rgb(100, 100, 110)'}:{color: 'rgb(220, 220, 250)'}}>ES</h4> 
      </div>
    </div>
  )
}

export default LangToggler