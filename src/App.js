// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Aboutf from './components/About2';
import Features from './components/Features';
import Contact from './components/Contact';
import AcademicCoordination from './components/AcademicCoordination';
import BibliotecaYRegistro from './components/BibliotecaYRegistro'; // Importa el nuevo componente
import AcademicStructure from './components/AcademicStructure';
import NursingInfo from './components/NursingInfo';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">


      <Header />
      <Hero />
      <About />
      <Features />

      <AcademicCoordination />
      <AcademicStructure />
      <BibliotecaYRegistro />
      <NursingInfo />
      <Contact />



    </div>
  );
}

export default App;
