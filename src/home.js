import React from "react";
import bio from './images/pic.jpg'

const Home = () => {
    return (

        <div name='home' className="text-white  py-16 px-4" >
            <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto ">
            <div className="flex flex-col p-12 mt-32 ">
                <h1 className="text-3xl p-2">AKSHAY PEDNEKAR</h1>
                <p className="text-2xl p-2 animate-pulse"><span className="bg-gray-500">Software Engineer</span></p>
                <p className="justify-center text-xl  italic p-2">" I am a B.E/I.T graduate with a passion for developing scalable web application and Working across Full stack.
I am looking to join team with trending technology to continue to grow my skill set white contributing to the positive outcome of Firm."</p>
            </div>
            <img className="w-[300px] mx-auto my-4 mt-16 " src={bio} alt='' />
            
            </div>
        
        </div>
    )

}
export default Home;