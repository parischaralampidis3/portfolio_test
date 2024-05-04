import React from "react";

function MobileMenu({ isActive, closeMenu }) {
  return (
    <div className={!isActive ? "" : "  fixed inset-0 bg-cyan-100 z-50 "}>
      <div className="flex items-center justify-around mt-0 ">
        <div>
          <h1 className="text-2xl text-blue-800 font-semibold w-30 mt-7 mx-5 ">
            Nick Charalabidis

          </h1>
        </div>
        <div onClick={closeMenu}>
          <img
            className="cursor-pointer  mr-10 mt-4 w-4 mt-7"
            src="../../assets/images/icon/close-menu-icon.png"
          />
        </div>
      </div>

      <ul className="flex  flex-col justify-center items-center text-right text-blue-800 text-4xl font-semibold mt-24">
        <li>
          <a className="" href="/">
            home
          </a>
        </li>
        <li className="mt-16">
          <a className="" href="/work">
            work
          </a>
        </li>
        <li className="mt-16">
          <a className="sub-mobile-navigation-items" href="/about">
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
  );
}
export default MobileMenu;
