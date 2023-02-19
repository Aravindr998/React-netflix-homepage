import './SectionTwo.css'
import TextContainer from './TextContainer'
import TitleSection from '../UI/TitleSection'
import DescSection from '../UI/DescSection'
import Media from './Media'
import Section from '../UI/Section'

const SectionTwo = props => {
  return(
    <Section>
      <Media className ='mobile'>
        <img className='mobile-img' src="/images/mobile.jpg" alt="" />
        <div className='box'>
          <div>
            <img className='box-img' src="/images/boxshot.png" alt="" />
          </div>
          <div className='text'>
            <div className='st'>Stranger Things</div>
            <div className='downloading'>Downloading...</div>
          </div>
          <div>
            <img className='loading-img' src="/images/download-icon.gif" alt="" />
          </div>
        </div>
      </Media>
      <TextContainer>
        <TitleSection>
          Download your shows to watch offline.
        </TitleSection>
        <DescSection>
          Save your favourites easily and always have something to watch.
        </DescSection>
      </TextContainer>
    </Section>
  )
}

export default SectionTwo