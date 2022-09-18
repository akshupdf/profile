import React from 'react';
import a1 from './images/asquare.jpg'
import a2 from './images/db.jpg'
import chat from './images/chat.jpg'
import chat1 from './images/chat1.jpg'


const Project = () =>{

    return(

        <div className='text-white h-auto mt-60'>
            <div>
            <h1 className='text-3xl underline text-center p-8 '>Some Of My Work</h1>

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-m gap-4 p-16 m-4 '>
                <div className='container p-2'>
                    <a href="https://akshupdf.github.io/asquare/"><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-2'>
                <a href="https://akshupdf.github.io/asquare/"><img src={a2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-2 '>
                    <img src={chat} alt='/' className='hover:scale-125 ease-in-out duration-300' />
                </div>
                <div className='container p-2'>
                    <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' />
                </div>

            </div>
            
        </div>
    )
}

export default Project;
