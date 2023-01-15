
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

                </div >
        
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-20 ">
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-5">1</div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center  rounded-2xl m-4">
                        <img
                                src="samplecover.png"
                                className="rounded-2xl w-full h-80 object-cover"
                                alt="..."
                            />
                            <h1>Title</h1>
                    </div>
                    
                    
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Search