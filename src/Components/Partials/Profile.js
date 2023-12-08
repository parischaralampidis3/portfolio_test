import React from "react";
import "../../Profile.css";

function Profile() {
  return (
    <div className=" container w-60  mx-auto">


    <div className="flex  justify-around">

                    

                    <div className="relative">
                        
                        
                        <div class="big-blink absolute w-20 h-20 rounded-full  bg-red-100 top-0 right-10 w-40 h-40"></div>

                          <div class="blink absolute w-5 h-5 rounded-full  bg-red-400 top-40 right-20 w-40 h-40"></div>
                        <div className="absolute animate-fade-in-right left  mt-2 ">
                            <h3 className="text-2xl w-40  text-cyan-700 font-bold">I'm front end developer</h3>
                        </div>
                           <div className="big-blink absolute w-4 h-4 rounded-full  bg-red-100 top-50 left-40 right-10 w-40 h-40"></div>

                      
                        <div className="absolute animate-fade-in-right left  mt-2 ">
                            <h3 className="text-2xl w-40  text-cyan-700 font-bold">I'm front end developer!</h3>
                        </div>
                    </div>

                    
                   





                    <div className="flex flex-column items-center justify-center">
                        <div className="mx-0 mt-6 ">
                
                            <h1 className=" text-2xl mt-20 font-semibold text-black  ">Paris Charalampidis</h1>
                            <p className=" text-red-900 mb-12 text-base">
                                I thrive on harnessing the power of technology to craft immersive
                                web experiences and bring creative visions to life. My mission is
                                simple: to transform ideas into captivating digital realities.
                            </p>
                            <button className="border bg-cyan-700 shadow-lg rounded-md p-1 text-white borded-full text-sm font-semibold mt-0">
                                Download Resume
                            </button>

                        </div>
                    </div>


              
    
    </div>


    </div>
  );
}
export default Profile;
