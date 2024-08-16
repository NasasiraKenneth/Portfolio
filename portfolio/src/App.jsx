import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <section ref={heroRef}>
        <Hero name={"Nasasira Kenneth"} />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={serviceRef}>
        <Service />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
