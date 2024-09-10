

import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer'; // Capitalized Footer
import Freebook from '../components/Freebook';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar />
        <Hero />
        <Freebook />
        <Footer />
      </div>
    </>
  );
}

export default Home;
