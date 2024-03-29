import React from 'react'
import Typed from 'react-typed';
import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div className='text-white ' >
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col '>
                <p className='animate-bounce font-sans text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-pink-200 to-fuchsia-400'>ANALYSE CINEMA INDUSTRY TRENDS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:px-6 '>Movie data analysis. Made simple.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'> Analyse ratings for
                    </p>
                    <Typed
                        className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-white md:pl-4'
                        strings={['Harry Potter', 'Pulp Fiction', 'Star Wars' ]} typeSpeed={98} backspeed={140}
                     />
                </div>
                <p className='md:text-2xl sm:text-xl text-gray-600'>Lorem Ipsum et dolor calem. Sin esperam dulat mangare comida.</p>
                <Link to="/search">
                    <button className='font-semibold transition ease-in-out delay-150 bg-gradient-to-r from-pink-200 to-fuchsia-300  hover:bg-gradient-to-r hover:to-blue-300 hover:from-sky-200 duration-300  opacity-80 my-6 mx-auto py-3 mt-8 w-[200px] rounded-md text-black drop-shadow-2xl'>Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero