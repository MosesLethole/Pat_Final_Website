import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TutoringServices from './components/TutoringServices'
import Reviews from './components/Reviews'
import './index.css';
import EnrolmentProcedure from './components/EnrolmentProcedure';
import Offers from './components/Offers'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <TutoringServices/>
      <Reviews/>
      <Offers/>
      <EnrolmentProcedure/>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;   