import React, { useState } from 'react'
import Extended from './Extended'
import "./Dropdown.css"

const Dropdown = (props) => {
  const [extend, setExtend] = useState(false)
  const extendClass = `${!extend && 'close'}` 
  const buttonClass = `svg ${!extend && 'closed'}`
  const dropdownHandler = (e) => {
    if(extend){
      setExtend(false)
    }else{
      setExtend(true)
    }
  }
  return (
    <React.Fragment>
      <button className='dropdown-button' onClick={dropdownHandler}>
        <div>{props.children}</div>
        <div className='svg-parent'>
          <svg
            id="thin-x"
            viewBox="0 0 26 26"
            className={buttonClass}
            focusable="true"
          >
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
          </svg>
        </div>
      </button>
      <Extended className={extendClass}>
        {props.extended}
      </Extended>
    </React.Fragment>
  )
}

export default Dropdown
