import React from "react";

function MobileMenu() {
  return (
    <div className="fixed inset-0 bg-cyan-100 z-50 lg:hidden">
      <div className="block lg:hidden">

        <div>
            <h1 className="text-3xl font-semibold w-30 mt-5 mx-5 ">Paris Charalampidis</h1>
        </div>
        <ul className="flex  flex-col justify-center items-center text-right text-cyan-800 text-4xl font-semibold mt-24">
          <li>
            <a className="" href="/home">
              home
            </a>
          </li>
          <li className="mt-16">
            <a className="" href="/create">
              work
            </a>
          </li>
          <li className="mt-16">
            <a className="sub-mobile-navigation-items" href="/view">
              about
            </a>
          </li>
          <li className="mt-16">
            <a className="sub-mobile-navigation-items" href="/contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MobileMenu;
