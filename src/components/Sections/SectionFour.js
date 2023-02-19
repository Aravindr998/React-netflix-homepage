import "./SectionFour.css"
import TextContainer from "./TextContainer"
import TitleSection from "../UI/TitleSection"
import DescSection from "../UI/DescSection"
import Media from "./Media"
import Section from "../UI/Section"

const SectionFour = (props) => {
  return (
    <Section>
      <Media className="children">
        <img src="/images/children.png" alt="" />
      </Media>
      <TextContainer>
        <TitleSection>Create profiles for children.</TitleSection>
        <DescSection>
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </DescSection>
      </TextContainer>
    </Section>
  )
}

export default SectionFour
