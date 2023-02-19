import './SelectLanguage.css'

const SelectLanguage = props => {
  const selectClass = `language-div ${props.className || ''}`
  return(
    <div className={selectClass}>
      <select name="languageSelect">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </div>
  )
}

export default SelectLanguage