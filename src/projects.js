import React from 'react';
import a1 from './images/acord.jpg'
import a2 from './images/asquare.jpg'
import chat from './images/gif.jpg'
import chat1 from './images/scroll.jpg'
import chat2 from './images/login.png'


const Project = () =>{

    return(

        <div name='project' className='text-white h-auto mt-60'>
            <div>
            <h1 className='text-3xl underline text-center p-8 '>Some Of My Work</h1>

            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 p-16 m-4 '>
                <div className='container p-4'>
                    <a href="https://acordseals.netlify.app/"><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                <a href="https://akshupdf.github.io/asquare/"><img src={a2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://tempn.netlify.app/"><img src={chat} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                    <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' />
                </div>
                <div className='container p-4 '>
                    <img src={chat2} alt='/' className='hover:scale-125 ease-in-out duration-300' />

            {/* <div className='grid sm:grid-cols-2 md:grid-cols-m gap-4 p-16 m-4 '>
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

            </div> */}
            <hr></hr>
            
        </div>
        </div>
        </div>
        
    )
}

export default Project;
