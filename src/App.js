import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
function App() {
  return (
    <div className='bg-[url("../public/8.png")]'>
      <div className='bg-[#000300] bg-opacity-90'>
        <Navbar />
        <Hero />
      </div>
      
     
    </div>
  )
}

export default App;