import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

function BurgerMenuTopBar() {
  const [isActive, setIsActive] = useState(false);

  const openMenu = () => {
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className="mt-0 block bg-cyan-100 z-50 lg:hidden">
        <div className="flex items-center justify-around mt-0">
          <div>
            <h1 className="text-xl text-cyan-900 font-semibold w-30 mt-5 mx-5 ">
              Paris Charalampidis
            </h1>
          </div>
          <div onClick={isActive ? closeMenu : openMenu}>
            <img
              className="p-2 md:p-1 cursor-pointer w-10 mt-5"
              src="../../assets/images/icon/menu-icon.jpg"
              alt="menu-icon"
            />
          </div>
        </div>
      </div>

      {isActive && (
        <MobileMenu isActive={isActive} closeMenu={closeMenu} />
      )}
    </div>
  );
}

export default BurgerMenuTopBar;
