import './Section.css'

const Section = props => {
  return(
    <section className='section'>
      {props.children}
    </section>
  )
}

export default Section