import React from "react";

function Lang() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <p className="mx-auto mt-5 text-base w-3/4 md:w-3/5 lg:w-2/4">
            Lang is an e-class platform targeting an educational audience. Users
            can add records to the database, and data is imported through a
            submission form.
          </p>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto lg:w-2/4">
          <img
            src="../assets/images/project_images/lang_02.png"
            alt="Lang Platform"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
          <div className="flex mt-10">
            <p className="mx-auto text-base w-full md:w-3/5 lg:w-3/5 mx-auto">
              Data can be viewed in the dashboard. This is the view where a user
              will be redirected after login.
            </p>
          </div>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto lg:w-2/4 mb-8">
          <img
            src="../assets/images/project_images/lang_01.png"
            alt="Lang Dashboard"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center mt-0 p-10">
          <div className="flex flex-row justify-center mt-5 mx-12 -mt-20 md:mt-1">
            <p className="text-base mx-auto mt-10 w-full md:-mt-0 lg:w-2/4">
              A user's record can be updated or deleted in their own single view.
              The update button triggers a second form to update the records in
              the database.
            </p>
          </div>


          <div className="md:w-full h-90 mt-10 mx-auto lg:w-2/4">
          <img
            src="../assets/images/project_images/lang_02.png"
            alt="Lang Platform"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


    
        </div>
      </div>
    </div>
  );
}

export default Lang;
