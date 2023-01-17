
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SortByListbox from './components/SortByListbox'
const Search = () => {

    return (
        <div className='bg-[url("../public/8.png")] bg-no-repeat'>
            <div className='bg-[#000300] bg-opacity-80 text-white'>
                <Navbar />
                
                <div className='max-w-[1240px] mx-auto text-white mt-4'>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:px-6 '>Movies.</h1>
                    <p className=' ml-6  md:text-2xl sm:text-xl text-slate-600'>Find thousands of movies with relevant ratings and analytics.</p>

                </div >
                <div className="grid grid-cols-2 p-20">
                    <div></div>
                    <div className="grid grid-cols-2 p-2">
                        <div className="ml-auto text-white rounded-lg bg-slate-800 align-end flex">
                            <p className="p-4">Sort by:</p>
                            <SortByListbox/>
                        </div>
                    </div>
                    
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                    <div className='text-slate-100'>
                        <div class=" text-lg font-bold text-center  rounded-2xl m-4">
                            <img
                                    src="samplecover.png"
                                    className="rounded-2xl w-full h-100 object-cover hover:opacity-60 shadow-lg"
                                    alt="..."
                            />
                            <p>Pulp Fiction</p>
                            <div className="flex justify-center space-x-4">
                                <p className="font-light text-base m-0">2022</p>
                                <p className="font-light text-sm  m-0 text-sky-200 mt-[0.25em]">4.93</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Search