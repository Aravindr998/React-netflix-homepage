import "./Extended.css"

const Extended = (props) => {
  const extendClass = `dropdown-extended ${props.className}`
  return (
    <div>
      <div className={extendClass}>
        {props.children}
      </div>
    </div>
  )
}

export default Extended
