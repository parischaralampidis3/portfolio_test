import React, { useState } from "react";

function Work() {
  const [isBloggerActive, setIsBloggerActive] = useState(true);
  const [isLangActive, setIsLangActive] = useState(true);

  
  const handleBloggerClick = () => {
    setIsBloggerActive((current) => !current);
  };

  const handleLangClick = () => {
    setIsLangActive((current) => !current);
  };

  return (
    <div className="container mx-auto w-full h-full">
      <div className=" flex flex-wrap mx-20 justify-center  p-10">
        <div className="flex">
          <div className=" p-16 mt-1  text-cyan-900 ">
            <div>
              <h1 className="text-center mt-2 p-4 text-2xl font-semibold">
                Blogger
              </h1>
            </div>

            <div className="flex flex-col justify-center">
              <div className="w-3/5  h-96 mt-5 mx-auto ">
                <img src="../assets/images/project_images/blogger_screenshot_04.png" />
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <button
                className="rounded shadow-lg w-2/4 shadow-black-500/50 bg-blue-600  text-center  mt-20 text-white font-semibold"
                onClick={handleBloggerClick}
              >
                show project
              </button>
            </div>

            <div
              className={
                isBloggerActive
                  ? "hidden"
                  : "bg-cyan-50 p-5 mt-5 rounded shadow-lg "
              }
            >
              <div>
                <p className="mx-auto mt-5 text-base w-3/4">
                  Blogger is a blog platform where is possible an admin user to
                  create a post with a title, and a theme. Also a user without
                  admin rights can register and also sign in, so he can add a
                  comment at the admin's post. 6
                </p>
                <p className="mx-auto mt-3 w-3/4">
                  The image above contains the view of register page, where a
                  user can register filling the fields.
                </p>
              </div>

              <div className="w-3/4  h-96 mt-10 mx-auto ">
                <img src="../assets/images/project_images/blogger_screenshot_04.png" />
              </div>
              <div className="flex flex-col items-center mx-14">
                <div className="flex mt-24 mx-20">
                  <p className="  mt-5 mx-auto w-3/4  text-base w-full">
                    This is the main dashboard page. This is the main view that
                    a user will be redirected, after login. At this view a user
                    can have access at the available posts.
                  </p>
                </div>
              </div>

              <div className=" w-3/4  h-96 mt-10 mx-auto">
                <img src="../assets/images/project_images/blogger_screenshot_02.png" />
              </div>

              <div className="flex flex-col items-center mt-0 p-12  mx-10">
                <div className="flex flex-row mx-12">
                  <p className=" mt-0 text-base mx-auto w-full">
                    This is a create post view, where an admin can create a new
                    post. A post can have a field of title, add an image as a
                    thumbnail, and also a body can be added.
                  </p>
                </div>
                <div className="w-5/6  h-96 mt-10 mx-auto">
                  <img src="../assets/images/project_images/blogger_screenshot_01.png" />
                </div>
              </div>
              <div className="flex flex-row justify-center mt-10 mx-12 ">
                <p className=" mt-0 text-base mx-auto w-3/4">
                  When a post is created, a user can access the post and also
                  can add a comment, specific to the post. The posts are saved
                  at the database, so the users can access them whenever they
                  are logged in.
                </p>
              </div>
              <div className="w-3/4  h-96 mt-10 mx-auto">
                <img src="../assets/images/project_images/blogger_screenshot_05.png" />
              </div>
            </div>
          </div>

          {/**----------lang project------------- */}
          <div className="w-full mt-10 p-5 text-cyan-900  ">
            <div>
              <div>
                <h1 className="mx-12 text-xl font-semibold">Lang</h1>
              </div>
              <div className="w-3/4  h-96 mt-10 mx-auto ">
                <img src="../assets/images/project_images/lang_01.png" />
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <button
                className="rounded shadow-lg w-2/4 shadow-black-500/50 bg-blue-600  text-center  mt-20 text-white font-semibold"
                onClick={handleLangClick}
              >
                show project
              </button>
            </div>

            <div
              className={
                isLangActive
                  ? "hidden"
                  : "bg-cyan-50 p-5 mt-5 rounded shadow-lg "
              }
            >
              <div>
                <p className="mx-auto mt-5 text-base w-3/4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>

              <div className="flex flex-col items-center mx-14">
                <div className="flex mt-24 mx-20">
                  <p className="  mt-12 mx-12  text-base w-1/3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p className=" mt-12 text-base w-1/3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                  </p>
                </div>
              </div>
              <div className=" w-3/4  h-96 mt-10 mx-auto">
                <img src="../assets/images/project_images/lang_02.png" />
              </div>
              <div className="flex flex-col items-center mt-16 p-12  mx-10">
                <div className="flex flex-row mx-12">
                  <p className="mx-12 mt-5 text-base w-full">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="w-5/6  h-96 mt-10 mx-auto">
                  <img src="../assets/images/project_images/lang_03.png" />
                </div>
              </div>
              <div className="w-3/4  h-96 mt-10 mx-auto">
                <img src="../assets/images/project_images/lang_04.png" />
              </div>
              <div>
                <div className="flex flex-row justify-center  mt-24 ">
                  <p className=" mt-16 text-base w-1/4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p className="mx-1 mt-16 text-base w-1/4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**--------product list project ----------- */}

        <div className="hidden w-full mt-10 p-5 text-cyan-900  bg-cyan-50">
          <div>
            <h1 className="mx-12 text-xl font-semibold">Product List</h1>
          </div>
          <div>
            <p className="mx-auto mt-5 text-base w-3/4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="w-3/4  h-96 mt-10 mx-auto ">
            <img src="../assets/images/project_images/product_list_01.png" />
          </div>

          <div className="flex flex-col items-center mx-14">
            <div className="flex mt-24 mx-20">
              <p className="  mt-12 mx-12  text-base w-1/3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className=" mt-12 text-base w-1/3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
            </div>
          </div>

          <div className=" w-3/4  h-96 mt-10 mx-auto">
            <img src="../assets/images/project_images/product_list_02.png" />
          </div>

          <div className="flex flex-col items-center mt-16 p-12  mx-10">
            <div className="flex flex-row mx-12">
              <p className="mx-12 mt-5 text-base w-full">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;
