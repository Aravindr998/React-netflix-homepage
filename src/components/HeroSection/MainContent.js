import InputEmail from '../UI/InputEmail'
import './MainContent.css'

const MainContent = props => {
  return(
    <div className='main-content'>
      <h1>Unlimited movies, TV shows and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
      <InputEmail/>
    </div>
  )
}

export default MainContent