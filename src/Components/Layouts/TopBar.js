import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function TopBar() {
  return (
    <div className="w-2/4 mx-auto mt-10 h-10">
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-row justify-start items-center  p-2 font-semibold">
          <div className="flex flex-row items-center text-sm md:text-base w-40">
            <FontAwesomeIcon icon={faPhone} />
            <h3 className="ml-2 text-cyan-800  ">(+30) 6947491008</h3>
          </div>

          <div className="flex flex-row items-center mx-8 text-sm md:text-base">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className="mx-2 text-cyan-800">parou.char@gmail.com</h3>
          </div>
        </div>

        <div className="text-2xl flex items-center">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon className="mx-6" icon={faGithub} />


        </div>
      </div>
    </div>
  );
}
export default TopBar;
