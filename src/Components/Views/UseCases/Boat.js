import React from "react";

function Boat() {
  return (
    <div className="container mx-auto mb-16">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <h1 className="text-center mb-6 text-4xl font-bold">Romantic boat sunset</h1>

          <div className=" sm:w-full md:w-4/4 lg:w-4/4 mb-4">
            <img
              className="bg-cyan-500 w-1/3 mx-auto shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\painting_13.png"
              alt="project_image"
            />

            <div className="mt-5 mb-10">
              <p className="text-sm   mx-auto  w-full md:-mt-0 lg:w-2/4   leading-8 text-gray-700  text-center">
                0,41 x 0.29 cm. Oil pastels and colored pencils.
              </p>
            </div>
          </div>
          <div className="mb-10">
           
            <p className="text-base  mx-auto mt-10 w-full md:-mt-0 lg:w-full leading-8 text-gray-700  text-left">
              Romantic boat sunset in windless waters.
            </p>
          </div>
        </div>
      </div>
       <div className="container w-full mx-auto">
            <a className="rounded-lg w-1/4 p-6 mt-12 block bg-blue-500 text-center text-white font-semibold lg: w-1/4 lg:mx-auto"href="/work">Go to gallery</a>
          </div>
    </div>
  );
}
export default Boat;
