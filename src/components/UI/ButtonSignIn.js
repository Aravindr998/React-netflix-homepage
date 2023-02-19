import './ButtonSignIn.css'

const ButtonSignIn = (props) => {
  const buttonClass = `sign-in-button ${props.className || ''}`
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={buttonClass}
    >
      {props.children}
    </button>
  )
}

export default ButtonSignIn
