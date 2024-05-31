import './App.css';
import AboutUs from './components/AboutUs';
import EveryNeed from './components/EveryNeed';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Service from './components/Service';
import TheNews from './components/TheNews';
import WhyChooseUs from './components/WhyChooseUs';


function App() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Service />
      <TheNews />
      <EveryNeed />
      <Portfolio />
      <Reviews />
      <Footer />

    </>
  );
}

export default App;
