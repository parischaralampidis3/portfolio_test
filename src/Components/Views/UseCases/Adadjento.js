import React from "react";

function Adadjento() {
  return (
    <div className="container mx-auto mb-16">
      <div>
        <div className="flex flex-col mt-12 mb-16 items-center justify-center">
          <h1 className="text-center mb-6 text-4xl font-bold">Adadjento</h1>

          <div className=" sm:w-full md:w-4/4 lg:w-4/4 mb-4">
            <img
              className="bg-cyan-500 w-1/3 mt-8 mx-auto shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\painting_1.png"
              alt="project_image"
            />

            <div className="mt-5 mb-10">
              <p className="text-sm   mx-auto  w-full md:-mt-0 lg:w-2/4   leading-8 text-gray-700  text-center">
                1.05 x 0,70 m. Oil pastels and colored pencils.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <p className="text-base w-3/5  mx-auto mt-10 w-full md:-mt-0 lg:w-2/5 leading-8 text-gray-700  text-left">
              The Antajetto is the middle part of Gustav Mahler's 5th Symphony,
              dedicated, after his doctor, to his ardent love for Alma, who,
              reading the score with her inner voice as a musician, wept from
              the musical specificity of the work, which it catalyzed the whole
              painting, the sea, the horizon, the sky, the whole range of its
              colors. Antiageto is a soundtrack to Luchino Visconti's film
              'Death in Venice' and completely colors its plot dramatically, as
              characterizes the painting as a whole.
            </p>
          </div>
        </div>
      </div>
      <div className="container w-full mt-16 mx-auto">
        <a
          className="rounded-lg mx-16 px-6 p-3 mt-12 block bg-blue-500  text-center text-white font-semibold md: w-2/4 lg: w-1/4 lg:mx-auto"
          
          href="/work"
        >
          Go to gallery
        </a>
      </div>
    </div>
  );
}
export default Adadjento;
