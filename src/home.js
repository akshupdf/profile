import React from "react";
import bio from './images/pic.jpg'

const Home = () => {
    return (

        <div name='home' className="text-white  py-16 px-4" >
            <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto ">
            <div className="flex flex-col p-12 mt-32 ">
                <h1 className="text-3xl p-2">AKSHAY PEDNEKAR</h1>
                <p className="text-2xl p-2 "><span className="bg-gray-500">Software Engineer</span></p>
                <p className="justify-center text-xl  italic p-2">" I am a B.E/I.T graduate with a passion for developing scalable web application and Working across Full stack.
I am looking to join team with trending technology to continue to grow my skill set white contributing to the positive outcome of Firm."</p>
<div className="m-4">
<a href="https://drive.google.com/file/d/1G2pN-Hr9UyYpdvkqUv82FdzEQUyRaHE7/view?usp=drive_link" rel="noreferrer" target="_blank" className="relative px-5 py-2 font-medium text-white group">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
 <span className="relative">Get resume</span>
</a>
</div>
            </div>
            <img className="w-[300px] mx-auto my-4 mt-16 " src={bio} alt='' />
            
            </div>
            
        
        </div>
    )

}
export default Home;
