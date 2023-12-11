import React from "react";
import "../../Profile.css";

function Skills() {
  return (
    <div className=" mt-12 p-3 mx-auto  md:text-xl w-3/6">
    

      <div class="grid grid-cols-3 ">
        <div className="mr-10 p-0 lg:ml-20">
          <div className="text-base text-cyan-800  lg:mx-14 text-lg">
            <h1>Design</h1>
          </div>
          <div className="text-sm  md:mt-5 mr-6 text-base md:mx-0 lg:text-lg mx-14 ">
            <h3>Figma</h3>
            <h3>Adobe XD</h3>
          </div>
        </div>

        <div className="mr-10 p-0 lg:ml-16">
          <div className="text-base text-cyan-800  lg:text-lg">
            <h1>Code</h1>
          </div>
          <div className="text-sm mt-0 md:mt-5 text-base lg:text-lg">
            <h3>HTML5</h3>
            <h3>CSS3/tailwind css</h3>
            <h3>Javascript</h3>
            <h3>React.js</h3>
            <h3>Jquery</h3>
            <h3>PHP</h3>
            <h3>Laravel</h3>
            <h3>MySql</h3>
          </div>
        </div>

        <div className="ml-6 p-0 lg:ml-16">
          <div className="text-base text-cyan-800 mb-0  lg:text-lg">
            <h1>Collaboration</h1>
          </div>
          <div className="text-sm mt-0 md:mt-5 text-base lg:text-lg">
            <h3>Confluence</h3>
            <h3>Jira</h3>
            <h3>Trello</h3>
            <h3>Slack</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
