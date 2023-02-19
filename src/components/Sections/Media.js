import './Media.css'

const Media = props => {
const mediaClass = props.className

  return(
    <div className={mediaClass}>
      {props.children}
    </div>
  )
}

export default Media