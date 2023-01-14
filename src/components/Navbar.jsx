import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import SearchBar from './SearchBar'

const Navbar = () => {
    const [nav, setnav] = useState(true)
    const handleNav = () => {
        setnav(!nav)
    }

    return (
        <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
            <img src="logo.png" class="object-cover h-48 m-4 sm:ml-[-0px]" alt="..." />
            <div className='hidden md:flex'><SearchBar/></div>
            <ul className ='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Search</li>
                <li className='p-4'>Genres</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden sm:pr-6'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'z-50 fixed left-0 top-0 w-[40%] h-full border-r border-r-slate-600 border-w-200 bg-slate-800 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <img src="logo.png" class="object-cover h-48 mt-[-48px] ml-4" alt="..." />
                <ul className='uppercase p-4 divide-y divide-slate-600'>
                    <li className='p-4' >Home</li>
                    <li className='p-4'>Search</li>
                    <li className='p-4'>Genres</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar