import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import '../app/globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
     
      <Footer />
    </>
  );
}
