import React from "react";
import { FiInstagram, FiLinkedin ,FiTwitter} from "react-icons/fi";


const Contact = () => {
    return (

        <div className="text-white  py-16 px-4" >
            <div className="max-w-[1240px]  mx-auto "> 
                <h1 className="text-3xl bold p-2 "> Reach Out to me</h1>
                <p className="text-2xl p-2"><span className="bg-gray-500">AKSHAY PEDNEKAR</span></p>
                <p className="text-xl p-2"><span className="bg-gray-500">Email id: pednekar.akshay9@gmail.com </span></p>
                <div className="flex">
                <h1 className="p-2 text-3xl"><a href="https://www.instagram.com/akshupdf/"><FiInstagram /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://www.linkedin.com/in/akshay-pednekar-017734147/?originalSubdomain=in"><FiLinkedin /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://twitter.com/"><FiTwitter /></a> </h1>
            </div>            
            <h1 className="p-2">Akshupdf © 2022</h1> 
            </div>
        </div>
    )

}
export default Contact;