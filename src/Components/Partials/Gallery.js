import { React, useState } from "react";
import "../Views/UseCases/Blogger";
function Gallery() {
  const [isActive, setIsActive] = useState(true);
  const [message, setMessage] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
    setMessage((current) => !current);
  };

  return (
    <div className="w-2/3 sm:w-30  mt-12 mx-auto  md:w-2/5">
      <div className="container rounded-md h-3/4 bg-cyan-700 w-40 lg:mx-2 w-full ">
        <h1 className="text-sm md:text-base  font-semibold text-white p-3 lg:text-xl">
          Latest Projects
        </h1>
      </div>

      {/** --------- first portfolio project ---------- */}
      <div className="p-2  mt-5 bg-cyan-50">
        <div>
          <h1 className="text-sm mx-5 md: text-base font-semibold text-cyan-700 lg:text-xl">
            Blogger
          </h1>
        </div>

        <div className="p-5 mt-2">
          <img
            className="bg-cyan-500 shadow-lg shadow-gray-300/50"
            src="..\assets\images\project_images\blogger_screenshot_03.png"
            alt="project_image"
          />

          <div className="flex w-full  xl:flex-row w-full mt-5 text-cyan-900 font-light  ">
            <p className="text-sm  leading-6 mx-5 mt-5  mr-16 text-left w-full lg:leading-5 w-full    ">
              Blogger is a project which consists of a platform for blog
              posting. It lets an admin to create a blog and post it. Also it
              supports comments functionality. A user can sign up and sign in
              the platform, and create comments or view blog posts.
            </p>
          </div>
        </div>
      </div>

      {/** --------- second portfolio project ---------- */}
      {/** --------------- hide projects functionality ------------*/}
      <div className={isActive ? "hidden" : ""}>
        <div className=" p-6 mt- bg-cyan-50">
          <div>
            <h1 className="mt-2 text-base font-semibold text-cyan-700 lg:text-xl">
              Lang
            </h1>
          </div>

          <div className="mt-8">
            <img
              className="bg-cyan-500 shadow-lg shadow-gray-300/50"
              src="..\assets\images\project_images\lang_01.png"
              alt="project_image"
            />

            <div className="flex w-full xl:flex-row w-full mt-5 text-cyan-900 font-light">
              <p className="text-sm leading-6 mx-5 leading-6 mt-5 w-full mr-16 text-left lg:leading-6 w-full">
                Lang is a project which consists of a e-class educative
                platform. Lang lets a user to add preffered students, and
                execute show,store,update,delete operations. Also Lang lets a
                user(eg.teaher), to create custom exercises and send an exercise
                through an email at his students.
              </p>
            </div>
          </div>
        </div>

        {/** ----------third second portfolio---------------------------- */}
      </div>
      <div className="mt-3 rounded shadow-lg shadow-black-500/50 bg-green-500 w-100 text-center mx-auto p-2 text-white font-semibold">
        <a href="/work">Go to work</a>
      </div>

      <div className="mt-12 rounded shadow-lg shadow-black-500/50 bg-blue-600 w-100 text-center mx-auto p-2 text-white font-semibold">
        <button onClick={handleClick}>
          {message ? "Hide Projects" : "Show More Projects"}
        </button>
      </div>
    </div>
  );
}
export default Gallery;
