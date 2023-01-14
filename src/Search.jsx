
import React from "react";
import Navbar from './components/Navbar';

import Footer from './components/Footer';


const Search = () => {
    return (
        <div className='bg-[url("../public/8.png")] bg-no-repeat'>
            <div className='bg-[#000300] bg-opacity-80'>
                <Navbar />
                <div className='max-w-[1240px] mx-auto text-white mt-4'>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:px-6 '>Search.</h1>
                    <p className=' ml-6  md:text-2xl sm:text-xl text-slate-600'>Find thousands of movies with relevant ratings and analytics.</p>

                </div>
            
                <div className="h-[40em] w-full ml-0  mt-20 text-white  bg-gray-800 opacity-80 shadow-2xl">
                
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Search