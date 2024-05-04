import { React, useState } from "react";
import "../Views/UseCases/Adadjento";
function Gallery() {
  const [isActive, setIsActive] = useState(true);
  const [message, setMessage] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
    setMessage((current) => !current);
  };

  return (
    <div className="w-2/3 sm:w-30  mt-12 mx-auto  md:w-2/5">
      <div className="container rounded-md h-3/4 bg-blue-900 w-40 lg:mx-2 w-full ">
        <h1 className="text-sm md:text-base  font-semibold text-white p-3 lg:text-xl">
          Latest Paintings
        </h1>
      </div>

      {/** --------- first portfolio project ---------- */}
      <div className="p-5 mx-2  mt-5 bg-blue-50">
        <div>
          <h1 className="text-sm mx-5 md: text-base font-semibold text-blue-900 lg:text-xl">
            Adadjento
          </h1>
        </div>

        <div className="p-5 mt-2">
          <img
            className="bg-cyan-500 shadow-lg w-1/2 mx-auto shadow-gray-300/50"
            src="..\assets\images\project_images\painting_1.png"
            alt="project_image"
          />

        </div>
      </div>

      {/** --------- second portfolio project ---------- */}
      {/** --------------- hide projects functionality ------------*/}
      <div className={isActive ? "hidden" : ""}>
        <div className=" p-5 mx-2 mt-5 bg-blue-50">
          <div>
            <h1 className="mt-2 text-base font-semibold text-blue-900 lg:text-xl">
              English Gallera
            </h1>
          </div>

          <div className="mt-8">
            <img
              className="bg-cyan-500 w-1/2 mx-auto shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\painting_2.png"
              alt="project_image"
            />

     
          </div>




        

    
    
        </div>

        {/** ----------third second portfolio---------------------------- */}
      </div>

       <div className="mt-12 mb-12 rounded shadow-lg shadow-black-500/50 bg-gray-400 w-100 text-center mx-auto p-2 text-white font-semibold">
        <button onClick={handleClick}>
          {message ? "Hide Paintings" : "Show More Paintings"}
        </button>
      </div>
      <div className="mt-3 rounded shadow-lg shadow-black-500/50 bg-blue-600 w-100 text-center mx-auto p-2 text-white font-semibold">
        <a href="/work">Go to Gallery</a>
      </div>

     
    </div>
  );
}
export default Gallery;
