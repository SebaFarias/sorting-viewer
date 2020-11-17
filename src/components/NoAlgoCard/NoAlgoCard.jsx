import React , {useContext} from 'react'
import LangContext from '../../language'
import './noAlgoCard.css'

const NoAlgoCard = () => {

  const lang = useContext(LangContext)

  const handleClick = () => {
    const algoList = Object.keys(lang.algorithms)
    document.getElementById('algoSelector').size = algoList.length    
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