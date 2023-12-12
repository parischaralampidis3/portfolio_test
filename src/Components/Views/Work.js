import React, { useState } from "react";

function Work() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="container-fluid w-full h-full">
      <div className="flex flex-wrap justify-center lg:flex-row md:p-6 lg:p-1">

        {/* Blogger Project */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8">
          <div className="p-4 text-cyan-900 bg-white rounded-lg ">
            <h1 className="text-center -mr-12 text-2xl font-semibold mb-4">Blogger</h1>
            <div className="flex flex-col justify-center items-center md:items-start">
               <div className="h-60 sm:w-full md:w-4/4 lg:w-4/4 mx-12 mb-4">
                <img src="../assets/images/project_images/blogger_screenshot_04.png" alt="Blogger Project" className="w-full h-full object-cover rounded-lg" />
              </div>
              <a
                href="/blogger"
                className="rounded-lg w-full sm:w-full p-2 lg:w-full mx-12 bg-green-500 text-center text-white font-semibold md:p-4 lg:p-2"
              >
                {isActive ? "Show Blogger Project" : "Hide Blogger Project"}
              </a>
            </div>
          </div>
        </div>

        {/* Lang Project */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8">
          <div className="mt-0 p-2 text-cyan-900 bg-white rounded-lg">
            <h1 className="text-center mb-6 text-2xl font-semibold">Lang</h1>
            <div className="flex flex-col justify-center items-center md:items-start">
              <div className="h-60 sm:w-full md:w-4/4 lg:w-4/4 mb-4">
                <img src="../assets/images/project_images/lang_02.png" alt="Lang Project" className="w-full h-full object-cover rounded-lg" />
              </div>
              <a
                href="/lang"
                className="rounded-lg w-full sm:w-full p-2 lg:w-full bg-green-500 text-center text-white font-semibold md:p-4 lg:p-2"
              >
              Show Lang Project
              </a>
            </div>
          </div>
        </div>

        {/* Another Lang Project (on a new line in lg size) */}
        <div className="w-full lg:flex-none p-4 md:p-8 ">
          <div className="mt-0 p-4 text-cyan-900 bg-white rounded-lg ">
            <h1 className="text-center mb-4 text-2xl font-semibold">Product List</h1>
            <div className="flex flex-col justify-center items-center md:items-center//">
               <div className="h-60 sm:w-full md:w-1/3 lg:w-1/3 mb-4">
                <img src="../assets/images/project_images/product_list_03.png" alt="Lang Project" className="w-full h-full object-cover rounded-lg" />
              </div>
              <a
                href="/productList"
                className="rounded-lg w-full md:w-1/3 lg:w-2/6 bg-green-500 text-center text-white font-semibold p-2 md:w-1/3  lg:w-1/3 p-2"
              >
                 Show Product List Project
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Work;
