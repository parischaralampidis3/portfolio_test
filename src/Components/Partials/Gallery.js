import { React, useState } from "react";
function Gallery() {
  const [isActive, setIsActive] = useState(true);
  const [message, setMessage] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
    setMessage((current) => !current);
  };

  return (
    <div className=" mt-12 p-3 mx-auto  w-2/5">
      <div className="container h-3/4 bg-cyan-700 ">
        <h1 className="font-semibold text-white p-3">Feature Projects</h1>
      </div>

      {/** --------- first portfolio project ---------- */}
      <div className="p-5">
        <div>
          <h1 className="mt-5 text-xl font-semibold text-cyan-700">Blogger</h1>
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

          <div className="grid grid-cols-2 gap-0 mt-5 text-cyan-900 font-semibold">
            <p className="mt-5 w-2/3  mx-auto">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p className="mt-5 w-2/3  mx-auto">
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
      <hr className="mt-10" />
      {/** --------- second portfolio project ---------- */}

      <div className={isActive ? "hidden" : ""}>
        <div className="mt-16 p-6">
          <div>
            <h1 className="mt-5 text-xl font-semibold text-cyan-700">Lang</h1>
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

            <div className="grid grid-cols-2 gap-0 mt-5 text-cyan-900 font-semibold">
              <p className="mt-5 w-2/3  mx-auto">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <p className="mt-5 w-2/3  mx-auto">
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
        <div class="mt-16 p-6">
          <div>
            <h1 className="mt-5 text-xl font-semibold text-cyan-700">
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

            <div className="grid grid-cols-2 gap-0 mt-5 text-cyan-900 font-semibold">
              <p className="mt-5 w-2/3  mx-auto">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <p className="mt-5 w-2/3  mx-auto">
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
