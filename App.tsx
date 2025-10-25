import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-50 text-stone-800 font-serif">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;