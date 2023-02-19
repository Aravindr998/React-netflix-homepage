import SelectLanguage from '../UI/SelectLanguage'
import './Footer.css'

const Footer = props => {
  return(
    <footer className='footer'>
      <div>
        <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
      </div>
      <div className='links'>
        <a href="">FAQ</a>
        <a href="">Media Centre</a>
        <a href="">Ways to Watch</a>
        <a href="">Cookie Preferences</a>
        <a href="">Speed Test</a>
        <a href="">Help Centre</a>
        <a href="">Investor Relations</a>
        <a href="">Terms of Use</a>
        <a href="">Corporate Information</a>
        <a href="">Legal Notices</a>
        <a href="">Account</a>
        <a href="">Jobs</a>
        <a href="">Privacy</a>
        <a href="">Contact Us</a>
        <a href="">Only on Netflix</a>
      </div>
      <div>
        <SelectLanguage className='select-language-footer' />
      </div>
      <div>
        <p className='netflix-footer'>Netflix India</p>
      </div>
    </footer>
  )
}

export default Footer