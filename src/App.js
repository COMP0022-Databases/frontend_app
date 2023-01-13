import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
function App() {
  return (
    <div className='bg-[url("../public/8.png")]'>
      <div className='bg-[#000300] bg-opacity-80'>
        <Navbar />
        <Hero />
        <Footer/>
      </div>
      
     
    </div>
  )
}

export default App;