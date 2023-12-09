import { React, useState } from "react";
function Gallery() {
  const [isActive, setIsActive] = useState(true);
  const [message, setMessage] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
    setMessage((current) => !current);
  };

  return (
    <div className=" w-30  mt-12 mx-auto  md:w-2/5">
      <div className="container mx-0  h-3/4 bg-cyan-700 w-40 lg:mx-2 w-full ">
        <h1 className="text-base font-semibold text-white p-3 lg:text-xl">Feature Projects</h1>
      </div>

      {/** --------- first portfolio project ---------- */}
      <div className="p-5">
        <div>
          <h1 className="mt-5 text-base font-semibold text-cyan-700 lg:text-xl">Blogger</h1>
        </div>

        <div className="mt-5 mx-0 bg-blue-50 w-60 p-2">
          <h3 className="text-cyan-800 font-semibold">Tags:</h3>
          <p className="mt-2">php,blog </p>
        </div>
        <div className="mt-8">
          <img
            src="..\assets\images\project_images\blogger_screenshot_03.png"
            alt="project_image"
          />

          <div className="flex flex-col w-95 xl:flex-row w-full mt-5 text-cyan-900 font-light  ">
            <p className="text-sm mx-auto leading-5 mt-5 w-56 mr-16 text-left  md:w-full    ">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p className="text-sm leading-5 mx-auto mt-5 w-56 mr-16 text-left md:w-full  ">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-cyan-600 w-40 text-center mx-auto p-2 text-white font-semibold">
          <button>Learn More</button>
        </div>
      </div>

      {/** ------------------------------------- */}
      <hr className="mt-0" />
      {/** --------- second portfolio project ---------- */}

      <div className={isActive ? "hidden" : ""}>
        <div className="mt-2 p-5">
          <div>
            <h1 className="mt-5 text-base font-semibold text-cyan-700 lg:text-xl">Lang</h1>
          </div>

          <div className="mt-5 mx-0 bg-blue-50 w-60 p-2">
            <h3 className="text-cyan-800 font-semibold">Tags:</h3>
            <p className="mt-2">Php,Laravel,React.js,CRUD </p>
          </div>
          <div className="mt-8">
            <img
              src="..\assets\images\project_images\blogger_screenshot_03.png"
              alt="project_image"
            />

            <div className="flex flex-col w-95 xl:flex-row w-full mt-5 text-cyan-900 font-light">
              <p className="text-sm mx-auto leading-5 mt-5 w-56 mr-16 text-left  md:w-full">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <p className="text-sm leading-5 mx-auto mt-5 w-56 mr-16 text-left md:w-full">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-cyan-600 w-40 text-center mx-auto p-2 text-white font-semibold">
            <button>Learn More</button>
          </div>
        </div>
        <hr className="mt-10" />
        {/** -------------------------------------- */}
        <div class="mt-5 p-5">
          <div>
            <h1 className="mt-5 text-base font-semibold text-cyan-700 lg:text-xl">
              Product List
            </h1>
          </div>

          <div className="mt-5 mx-0 bg-blue-50 w-80 p-3">
            <h3 className="text-cyan-800 font-semibold">Tags:</h3>
            <p className="mt-2">Php,Javascript,CSS3,HTML5,CRUD </p>
          </div>
          <div className="mt-8">
            <img
              src="..\assets\images\project_images\blogger_screenshot_03.png"
              alt="project_image"
            />

            <div className="flex flex-col w-95 xl:flex-row w-full mt-5 text-cyan-900 font-light">
              <p className="text-sm mx-auto leading-5 mt-5 w-56 mr-16 text-left  md:w-full">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <p className="text-sm leading-5 mx-auto mt-5 w-56 mr-16 text-left md:w-full ">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-cyan-600 w-40 text-center mx-auto p-2 text-white font-semibold">
            <button>Learn More</button>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="mt-12 bg-blue-600 w-100 text-center mx-auto p-2 text-white font-semibold">
        <button onClick={handleClick}>
          {message ? "Hide Projects" : "Show More Projects"}
        </button>
      </div>
    </div>
  );
}
export default Gallery;
