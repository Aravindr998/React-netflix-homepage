import './SectionOne.css'
import TextContainer from './TextContainer'
import TitleSection from '../UI/TitleSection'
import DescSection from '../UI/DescSection'
import Media from './Media'
import Section from '../UI/Section'

const SectionOne = (props) => {
  return (
    <Section>
      <TextContainer>
        <TitleSection>Enjoy on your TV.</TitleSection>
        <DescSection>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</DescSection>
      </TextContainer>
      <Media className='tv'>
        <img src="/images/tv.png" alt="" />
        <div>
          <video src="/images/tv.m4v" autoPlay playsInline muted loop></video>
        </div>
      </Media>
  </Section>
  )
}

export default SectionOne