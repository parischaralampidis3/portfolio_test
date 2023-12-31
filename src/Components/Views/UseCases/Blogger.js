import React from "react";

function Blogger() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <p className="mx-auto  mt-5 text-base w-3/5 md:w-3/5 lg:w-2/4">
            Blogger is a blog platform where is possible an admin user to create
            a post with a title, and a theme. Also a user without admin rights
            can register and also sign in, so he can add a comment at the
            admin's post. 6
          </p>
          <p className="mx-auto  mt-5 text-base w-3/5 md:w-3/5 lg:w-2/4">
            The image above contains the view of register page, where a user can
            register filling the fields.
          </p>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto  w-4/6 lg:h-full w-3/6 ">
          <img src="../assets/images/project_images/blogger_screenshot_04.png" />
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
          <div className="flex mt-10">
            <p className="   mx-auto  text-base   w-3/5 md:mt-0 w-5/6 lg:w-3/4 ">
              This is the main dashboard page. This is the main view that a user
              will be redirected, after login. At this view a user can have
              access at the available posts.
            </p>
          </div>
        </div>

        <div className=" w-3/4  h-90 mt-10 mx-auto md:w-3/6  mb-24">
          <img src="../assets/images/project_images/blogger_screenshot_02.png" />
        </div>

        <div className="flex flex-col items-center mt-0 p-10  ">
          <div className="flex flex-row mx-6 -mt-24">
            <p className="  text-base mx-auto  mt-0 w-3/5 md:mt-0 w-5/6 lg:w-3/5">
              This is a create post view, where an admin can create a new post.
              A post can have a field of title, add an image as a thumbnail, and
              also a body can be added.
            </p>
          </div>
          <div className="w-2/4  h-90 mt-5 mx-auto md:w-3/6 lg:mt-24">
            <img src="../assets/images/project_images/blogger_screenshot_01.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10 mx-12 -mt-24 md:mt-1">
          <p className=" text-base mx-auto  mt-20 w-4/5 md:-mt-0 w-5/6 lg:w-3/6">
            When a post is created, a user can access the post and also can add
            a comment, specific to the post. The posts are saved at the
            database, so the users can access them whenever they are logged in.
          </p>
        </div>
        <div className="w-3/4  h-96 mt-10 md:w-3/6 mx-auto">
          <img src="../assets/images/project_images/blogger_screenshot_05.png" />
        </div>
      </div>
    </div>
  );
}
export default Blogger;
