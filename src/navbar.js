import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai'




const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)

  }

  return (
<div className='flex justify-between items-center h-24 max-w-[1500px] text-white'>
  <h1 className='w-auto text-3xl font-bold  '>AKSHUPDF </h1>
      <ul className='flex'>
        <li className='p-4'> Home </li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Hobbies</li>
        <li className='p-4'>Reach out</li>
      </ul>
    <div onClick={handleNav}>
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
      
    </div>       
    <div className={!nav ? 'fixed left-0 top-7 w-80 h-full border-r border-r-gray-900 bg-gray-[#808080]' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold  text-[#808080]'>AKSHUPDF </h1>
      <ul className=  'absolute pt-10'>
      <li className='p-4 border-b border-[#808080]'  >Home</li>
        <li className='p-4 border-b border-[#808080]'>Projects</li>
        <li className='p-4 border-b border-[#808080]'>Hobbies</li>
        <li className='p-4 border-b border-[#808080]'>Reach out</li>
      </ul>
    </div>
    </div>
  
  );
}

export default Navbar;
