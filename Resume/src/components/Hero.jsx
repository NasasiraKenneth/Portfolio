import HeroImage from '../assets/hero-image.png';
import '../styles/Hero.css';
import CV from '../assets/CV.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='hero-container'>
      <img src={HeroImage} alt="" className='hero-image' />
      <h1 className='hero-title'>
        I'm <span className='hero-title-gradient'>Nasasira Kenneth</span>, Full-Stack Developer
      </h1>
      <p className='hero-description'>
        I specialize in building modern and responsive web applications, android applications and systems.
      </p>
      <div className='hero-buttons'>
        <button className='hero-button'>Contact With Me</button>
        <button className='hero-button hero-button-secondary' 
        onClick={handleDownload}>Resume</button>
      </div>
    </div>
  );
}

export default Hero;
