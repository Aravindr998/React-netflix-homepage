import RightArrow from "./RightArrow"
import './InputEmail.css'

const InputEmail = props => {
  return(
    <form className='input-email' action="">
      <input type="email" placeholder='Email address'/>
      <button type='submit' ><span>Get Started </span><RightArrow className='input-right-arrow' /></button>
    </form>
  )
}

export default InputEmail