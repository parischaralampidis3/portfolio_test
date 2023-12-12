import React from "react";

function ProductList() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <p className="mx-auto mt-5 text-base w-3/4 md:w-3/5 lg:w-2/4 mx-12 text-center">
            Product List is a software in which you can add a product through a form list.
          </p>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto lg:w-2/4">
          <img
            src="../assets/images/project_images/product_list_04.png"
            alt="Product List Platform"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full mx-auto">
          <div className="flex flex-col mt-5 items-center justify-center">
            <p className="mx-auto mt-5 text-base w-2/4 md:w-2/5 lg:w-3/4 text-center">
              Product List is a software in which you can add a product through a form list.
            </p>
          </div>
        </div>

        <div className="w-3/4 h-90 mt-10 mx-auto lg:w-2/4 mb-8">
          <img
            src="../assets/images/project_images/product_list_02.png"
            alt="Product List Dashboard"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center mt-0 p-10">
          <div className="flex flex-row justify-center mt-5 mx-12 -mt-20 md:mt-1">
            <p className="text-base mx-auto mt-10 w-full md:-mt-0 lg:w-3/5 text-center">
              A user's record can be updated or deleted in their own single view.
              The update button triggers a second form to update the records in
              the database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
