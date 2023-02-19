import './TextContainer.css'

const SectionText = props => {
  return(
    <div className='section-one-text'>
      {props.children}
    </div>
  )
}

export default SectionText