import React from "react";

function Lang(){
 return (

     <div className="container mx-auto">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <p className="mx-auto  mt-5 text-base w-3/5 md:w-3/5 lg:w-2/4">
            Lang  is an e-class platform, that targets educative audience. With Lang is possible a 
            user to add records into the database.
          </p>
          <p className="mx-auto  mt-5 text-base w-3/5 md:w-3/5 lg:w-2/4">
            The import data is achieved through a submission form. </p>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto  w-4/6 lg:h-full w-3/6 ">
          <img src="../assets/images/project_images/lang_02.png" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex mt-10">
            <p className="   text-base   w-3/5 md:mt-0 w-5/6 lg:w-5/6 ">
              Data can be viewed into the dashboard.This is the view where a user
              will be redirected, after login. 
            </p>
          </div>
        </div>

        <div className=" w-3/4  h-90 mt-10 mx-auto md:w-3/6  mb-24">
          <img src="../assets/images/project_images/lang_01.png" />
        </div>

        <div className="flex flex-col items-center mt-0 p-10  ">
      <div className="flex flex-row justify-center mt-5 mx-12 -mt-20 md:mt-1">
          <p className=" text-base mx-auto  mt-10 w-4/5 md:-mt-0 w-5/6 lg:w-2/4">
            A user rexord can be updated or deleted into his own single view. Update button triggers
            a seconde form in order to update the records in the database.
          </p>
        </div>
          <div className="w-2/4  h-90 mt-5 mx-auto md:w-3/6 lg:mt-24">
            <img src="../assets/images/project_images/lang_04.png" />
          </div>
        </div>
    
      </div>
    </div>
    )   
 }

export default Lang;