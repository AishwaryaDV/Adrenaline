import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Video from './components/Video';
import Equipments from './components/Equipments';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Classes from './components/Classes';
import BMI from './components/BMI';
import Trainers from './components/Trainers';
import Slideshow from './components/Slideshow';
import FAQ from './components/FAQ';
import VerticalCarousel from './components/VerticalCarousel';

function App() {
  return (
    <div className="appContainer">
      
      <Home/>
      <About />
      <Services />
      <VerticalCarousel/>
      <Classes/>
      <BMI/>
      <Membership/>
      <Trainers/>
      <Equipments/>
      <Slideshow/>
      <Testimonial/>
      <FAQ/>
      <Footer/>  
  
    </div>
  );
}

export default App;
