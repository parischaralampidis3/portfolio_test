import React from "react";
import "../../App.css";
function Navigation() {
  return (
    <div className="box-border">
      <div className="bg-cyan-50 w-4/5 h-screen p-12">
        <h1 className="text-cyan-800 text-left text-xl font-bold mx-auto">

          Paris Charalampidis
        </h1>

        <div className="container">
          <div className=" flex flex-column ">
            <ul className="mx-19 text-left text-xl font-italic font-semibold my-24">
              <li className="nav-a">
                <a href="/">home</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/work">work</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/about">about</a>
              </li>
              <li className="nav-a mt-4">
                <a href="/contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
