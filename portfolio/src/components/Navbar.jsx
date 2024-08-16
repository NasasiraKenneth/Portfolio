import React from 'react';

const Navbar = ({ scrollToSection, heroRef, aboutRef, serviceRef, projectsRef, contactRef }) => {
  return (
    <nav className='bg-[#14312a] text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Kenn</div>
            <div className='space-x-6'>
                <button onClick={() => scrollToSection(heroRef)} className='hover:text-gray-400'>Home</button>
                <button onClick={() => scrollToSection(aboutRef)} className='hover:text-gray-400'>About Me</button>
                <button onClick={() => scrollToSection(serviceRef)} className='hover:text-gray-400'>Services</button>
                <button onClick={() => scrollToSection(projectsRef)} className='hover:text-gray-400'>Projects</button>
                <button onClick={() => scrollToSection(contactRef)} className='hover:text-gray-400'>Contact</button>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </nav>
  );
}

export default Navbar;
