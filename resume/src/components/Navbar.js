import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
const Navbar = () => {
  const getClassName = ({ isActive }) => 
    isActive ? "hover:text-gray-400 active:text-gray-500 text-gray-500" : "hover:text-gray-400 active:text-gray-500";

  return (
    <nav className="bg-[#14312a] text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Kenn</div>
        <div className="space-x-6">
          <NavLink to="/" className={getClassName} >Home</NavLink>
          <NavLink to="/about" className={getClassName} >About Me</NavLink>
          <NavLink to="/service" className={getClassName} >Services</NavLink>
          <NavLink to="/projects"className={getClassName} >Projects</NavLink>
          <NavLink to="/contact" className={getClassName} >Contact</NavLink>
        </div>
        <Button >
          Connect Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
