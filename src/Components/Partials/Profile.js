import React from "react";

function Profile(){
    return(
    
           <div className="flex flex-column mx-auto h-96">
        <div className="w-3/5  bg-red-50 ">
            <div className="relative w-40 h-40 mt-20 mx-auto rounded-full bg-red-200">
                <div className="absolute top-1/2 left-1/2  -translate-y-1/2 text-center">
                    <h1 className="absolute -top-24 transform  left-20 translate-y-1/5 font-bold text-red-800 text-xl w-full text-cyan-900" >I'm</h1>
                    <h3 className="absolute top-0 -left-1/3 transform -translate-x-1/5 -translate-y-1/2 font-bold text-red-800 text-3xl">Front end Developer</h3>
                </div>
            </div>
        </div>
        <div className="w-3/5 bg-white">
            <h1 className="text-cyan-900 font-bold text-lg mx-12 mt-16">Paris Charalampidis</h1>
            <p className="mx-12 mt-8 w-2/4 text-left text-md">I thrive on harnessing the power of technology to craft
                 immersive web experiences and bring creative visions to life. 
                My mission is simple: to transform ideas into captivating digital realities.
            </p>
            <div className="">
               <button className="border bg-blue-50 shadow-lg rounded-md p-2 text-cyan-700 borded-full mx-12 text-base font-semibold mt-5">Download Resume</button> 
            </div>
        </div>
    </div>
    ) 
}
export default Profile;