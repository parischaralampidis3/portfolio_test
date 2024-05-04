import React from "react";

function Vezouvio() {
  return (
    <div className="container mx-auto mb-16">
      <div>
        <div className="flex flex-col  mt-12 mb-16 items-center justify-center">
          <h1 className="text-center mb-6 text-4xl font-bold">
           Heart of Vezouvio
          </h1>

          <div className=" sm:w-full md:w-4/4 lg:w-4/4 mb-4">
            <img
              className="bg-cyan-500 w-1/3 mx-auto shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\painting_20.png"
              alt="project_image"
            />

            <div className="mt-5 mb-10">
              <p className="text-sm   mx-auto  w-full md:-mt-0 lg:w-2/4   leading-8 text-gray-700  text-center">
                0,60 x 0,50 m. Oil pastels and colored pencils.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <p className="text-base w-3/5  mx-auto mt-10 w-full md:-mt-0 lg:w-2/3 leading-8 text-gray-700  text-left">
           Illustration of a fantastic mineral that becomes glass, that becomes a painting through the beauty of its colors.
            </p>
          </div>
        </div>
      </div>
              <div className="container w-full mt-16 mx-auto">
            <a className="rounded-lg mx-16 px-6 p-3 mt-12 block bg-blue-500  text-center text-white font-semibold md: w-2/4 lg: w-1/4 lg:mx-auto"href="/work">Go to gallery</a>
          </div>
    </div>
  );
}

export default Vezouvio;
