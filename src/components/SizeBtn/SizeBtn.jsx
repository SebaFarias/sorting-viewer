import React, {useContext} from 'react'
import {GlobalContext} from '../../globalContext'
import LanguageContext from '../../language'
import RangeHud from '../RangeHud/RangeHud'
import './rangeSelector.css'

const MAX_ARRAY_SIZE = 60
const MIN_ARRAY_SIZE = 6

const SizeBtn = ({ selecting , tools }) => {

  const lang = useContext(LanguageContext)
  const [ global , controller ] = useContext(GlobalContext)

  const handleButtonClick = () => {
    tools.openSize()
    }
  const handleChange = event => {
    controller.setSize(event.target.value)
  }

  return(
    <div className={`control size ${selecting? 'using' : ''}`}>
      <label className='label' htmlFor='sizeBtn'>{lang['size']}</label>
      {selecting ?
      <div id='sizeSelector'>
        <RangeHud 
          level = {(global.size - MIN_ARRAY_SIZE) * 100 / (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)}
          text = {global.size}
          control = 'size'
        />
        <input 
          type="range" 
          className='range size'
          value={global.size} 
          min={MIN_ARRAY_SIZE}
          max={MAX_ARRAY_SIZE}
          step = '1'
          onChange={handleChange}
          />
        </div>
      :
      <button 
        id= 'sizeBtn'
        className='size btn' name='size button'
        onClick={handleButtonClick}
      >
        {<div className='size-icon'>{global.size}</div>}
      </button>
    }
    </div>
  )
}

export default SizeBtn