import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white ' >
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col '>
                <p className='text-[#fca311] font-bold p-2'>ANALYSE CINEMA INDUSTRY TRENDS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Movie data analysis. Made simple.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'> Analyse ratings for
                    </p>
                    <Typed
                        className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-slate-600 md:pl-4'
                        strings={['Harry Potter', 'Pulp Fiction', 'Star Wars' ]} typeSpeed={98} backspeed={140}
                     />
                </div>
                <p className='md:text-2xl sm:text-xl text-gray-600'>Lorem Ipsum et dolor calem. Sin esperam dulat mangare comida.</p>
            </div>
        </div>
    );
}

export default Hero