import React from "react";
import "../../App.css";
function Navigation() {
  return (
    <div className="box-border">
      <div className="bg-blue-500 w-3/5 h-screen p-10">
        <h1 className="text-gray-100 text-left text-xl mr-12 font-extrabold ">
          Nick Haralabidis
        </h1>

        <div className="container">
          <div className=" flex flex-column ">
            <ul className="mx-19 text-left text-xl text-gray-50 font-italic font-semibold my-24">
              <li className="nav-a">
                <a href="/">Home</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/work">Gallery</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/about">About</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
