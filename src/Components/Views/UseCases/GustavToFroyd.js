import React from "react";

function EnglishGallera() {
  return (
    <div className="container mx-auto mb-16">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <h1 className="text-center mb-6 text-4xl font-bold">Gustav to Froyd</h1>


          <div className=" sm:w-full md:w-4/4 lg:w-4/4 mb-4">
            <img
              className="bg-cyan-500 w-2/3 mx-auto shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\painting_4.png"
              alt="project_image"
            />

            <div className="mt-5 mb-10">
              <p className="text-sm   mx-auto  w-full md:-mt-0 lg:w-2/4   leading-8 text-gray-700  text-center">
              0.85 x 0.55 cm. Oil pastels and colored pencils.
              </p>
            </div>
          </div>
          <div className="mb-10">
         
            <p className="text-base w-3/5  mx-auto mt-10 w-full md:-mt-0 lg:w-2/5 leading-8 text-gray-700  text-left">
            A painting that narrates the overwhelming turning point in the life of the great Austrian composer Gustav Mahler, when he, as a result of his leveling behavior towards Alma Mahler's wife, was abandoned by her, forced as an outcast of a love, with his heart uprooted like the comforting tree next to him to take refuge in Sigmund Freud's psychiatrist

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
export default EnglishGallera;
