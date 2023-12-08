import React from "react";

function Navigation() {
  return (
    <div className="box-border">
      <div className="bg-cyan-50 w-3/4 h-screen p-12">
        <h1 className="text-cyan-800 text-left text-2xl font-bold mx-auto">
          Paris Charalampidis
        </h1>

        <div className="container">
          <div className=" flex flex-column ">
            <ul className="mx-20 text-right text-2xl font-semibold my-24">
              <li>
                <a href="/">home</a>
              </li>
              <li className="mt-4">
                <a href="/work">work</a>
              </li>
              <li className="mt-4">
                <a href="/about">about</a>
              </li>
              <li className="mt-4">
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
