import './SectionThree.css'
import TextContainer from './TextContainer'
import TitleSection from '../UI/TitleSection'
import DescSection from '../UI/DescSection'
import Media from './Media'
import Section from '../UI/Section'

const SectionThree = props => {
  return(
    <Section>
    <TextContainer>
      <TitleSection>
        Watch everywhere.
      </TitleSection>
      <DescSection>
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
      </DescSection>
    </TextContainer>
    <Media className='mac'>
      <img src="/images/mac.png" alt="" />
      <div>
        <video src="/images/mac.m4v" autoPlay playsInline loop muted></video>
      </div>
    </Media>
  </Section>
  )
}

export default SectionThree