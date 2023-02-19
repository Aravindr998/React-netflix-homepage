import './RightArrow.css'

const RightArrow = (props) => {
  const arrowClass = `right-arrow ${props.className || ''}`
  return (
    <svg className={arrowClass} viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
      <desc>chevron</desc>
      <path
        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
      ></path>
    </svg>
  )
}

export default RightArrow
