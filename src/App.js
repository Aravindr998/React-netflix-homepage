import './App.css';
import NavBar from './components/Header/NavBar';
import MainContent from './components/HeroSection/MainContent'
import SectionOne from './components/Sections/SectionOne';
import SectionTwo from './components/Sections/SectionTwo';
import SectionThree from './components/Sections/SectionThree'
import SectionFour from './components/Sections/SectionFour';
import FaqSection from './components/Sections/FaqSection';
import Footer from './components/Footer/Footer'

function App() {
  return (
      <div className='container'>
        <div className='background'>
          <div className="backdrop">
            <div className='row'>
              <NavBar/>
              <section className='main-section'>
                <MainContent/>
              </section>
            </div>
          </div>
        </div>
        <div className='row'>
          <SectionOne/>
        </div>
        <div className='row'>
          <SectionTwo/>
        </div>
        <div className='row'>
          <SectionThree/>
        </div>
        <div className='row'>
          <SectionFour/>
        </div>
        <div className="row">
          <FaqSection/>
        </div>
        <div className="row">
          <Footer/>
        </div>
      </div>
  );
}

export default App;
