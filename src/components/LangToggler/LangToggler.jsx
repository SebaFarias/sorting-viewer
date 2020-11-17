import React from 'react'
import './langToggler.css'

const LangToggler = ( { eng , toggle } ) => {

  return(
    <div className="container">
      <button 
        className={eng?"indicator en":"indicator"}
        name="language toggler"
        type="button"
        role="switch"
        aria-checked={eng}
        onClick={toggle}
        >
        <h4 className={eng?'on':''}>EN</h4> 
        <h4 className={eng?'':'on'}>ES</h4> 
      </button>
    </div>
  )
}

export default LangToggler