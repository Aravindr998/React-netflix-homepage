import ButtonSignIn from "../UI/ButtonSignIn"
import NetflixLogo from "../UI/NetflixLogo"
import SelectLanguage from "../UI/SelectLanguage"
import './NavBar.css'

const NavBar = props => {
  return(
    <nav>
      <NetflixLogo className='navbar-logo' />
      <div>
        <SelectLanguage/>
        <ButtonSignIn className='navbar-signin-button'>Sign In</ButtonSignIn>
      </div>
    </nav>
  )
}

export default NavBar