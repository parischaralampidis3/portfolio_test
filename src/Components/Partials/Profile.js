import React from "react";
import "../../Profile.css";

function Profile() {
  return (
    <div className=" container w-60  mx-auto">
      <div className="flex  justify-around">
        <div className="relative">
          <div className="absolute animate-fade-in-right left  mt-2 ">
            <h3 className="text-xl w-40  text-cyan-700 font-bold md:text-2xl">
              I'm front end developer
            </h3>
          </div>
        </div>

        <div className="flex flex-column items-center justify-center">
          <div className="mx-0 mt-6 ">
            <h1 className=" text-xl mt-20 mb-5 font-semibold text-black md:text-2xl  ">
              Paris Charalampidis
            </h1>
            <p className=" text-base text-red-900 font-semibold mb-12 md:text-lg ">
              I thrive on harnessing the power of technology to craft immersive
              web experiences and bring creative visions to life. My mission is
              simple: to transform ideas into captivating digital realities.
            </p>
            <button className="border bg-cyan-700 shadow-lg  rounded-md p-2 text-white borded-full text-sm font-semibold mt-0  md:p-4">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
