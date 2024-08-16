import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import RootLayout from './components/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <Hero name = "Nasasira Kenneth" />},
      {path: '/about', element: <About />},
      {path: '/service', element: <Service />},
      {path: '/projects', element: <Projects />},
      {path: '/contact', element: <Contact />},
    ]
  }
  
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
