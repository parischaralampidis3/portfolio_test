import React from "react";
import "../../Profile.css";

function Profile() {
  return (
    <div className=" container w-2/4  mx-auto">
      <div className="flex  justify-around">
        <div className="relative">
          <div className="absolute mt-2 w-full "></div>
        </div>
        <div className="flex flex-column items-center justify-center">
          <div className="mx-0 mt-6 ">
            <h1 className="text-base sm:text-xl mt-20 mb-5 font-semibold text-black md:text-3xl text-gray-800  ">
              Nick Haralabidis
            </h1>
            <p className="text-sm  w-3/4 sm: w-full text-lg text-gray-700 font-normal mb-12 md:text-xl text-gray-600 p-2  leading-10 ">
              I am self-taught, with a study of painting techniques and more
              general subjects of painting and history, both of the art of
              painting and international painters. The guide in my art is
              initially realism "tied" with naturalistic detail, combined with
              an impressionistic or even surreal tendency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
