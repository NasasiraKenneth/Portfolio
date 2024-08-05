import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-md navbar-lg'>
      <div className='container container-md'>
        <div className='title title-md'>Kenn</div>
        <div className='nav-links'>
          <a href="#home" className='nav-link'>Home</a>
          <a href="#about" className='nav-link'>About Me</a>
          <a href="#service" className='nav-link'>Services</a>
          <a href="#project" className='nav-link'>Projects</a>
          <a href="#contact" className='nav-link'>Contact</a>
        </div>
        <button className='connect-button connect-button-md'>Connect Me</button>
      </div>
    </nav>
  );
}

export default Navbar;
