import React , {useContext} from 'react'
import LangContext from '../../language'
import './noAlgoCard.css'

const NoAlgoCard = ({ target, before}) => {

  const lang = useContext(LangContext)

  const handleClick = () => {
    const targetEl = document.getElementById(target)
    document.getElementById(before).click()
    if(targetEl){
      targetEl.click()//this is not working as expected with the algorithm <select> element
    }
    else{
      handleClick()
    }
  }
  return(
    <div id="noAlgoCard" className="no-algo-card" onClick={handleClick}>
      <h2>{lang.welcome.substring(0, lang.welcome.indexOf('!') + 1)}</h2>
      <h2>{lang.welcome.substring(lang.welcome.indexOf('!') + 1)}</h2>
      <div className='no-algo-img'/>
    </div>
  )
}

export default NoAlgoCard