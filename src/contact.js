import React from "react";
import { FiInstagram, FiLinkedin ,FiTwitter} from "react-icons/fi";



const Contact = () => {
    return (

        <div name='reach' className="text-white py-16 px-4" >

            <div className=" border-2 max-w-sm  p-4 "> 
        
                <h1 className="text-3xl bold p-2 "> Reach Out to me</h1>
                <p className="text-xl p-2"><span className="bg-gray-500">Email id: pednekar.akshay9@gmail.com </span></p>
                <div className="flex">
                <h1 className="p-2 text-3xl"><a href="https://www.instagram.com/akshupdf/"><FiInstagram /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://www.linkedin.com/in/akshay-pednekar-017734147/"><FiLinkedin /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://twitter.com/akshup9"><FiTwitter /></a> </h1>

                
            </div>            
            
            </div>
            <br></br>
            <hr></hr>
            <h1 className="p-2 items-center">Akshupdf © 2022</h1> 
        </div>
    )

}
export default Contact;