import React from "react";
import "../../Profile.css";

function Skills() {
  return (
    <div className=" mt-12 p-3 mx-auto  md:text-xl w-3/6">
    

      <div class="flex justify-center    ">
     

        <div className="px-10 mb-5">
          <div className="text-base text-cyan-800  ">
            <h1>Code</h1>
          </div>
          <div className="text-sm mt-0 md:mt-5 text-base ">
            <h3>HTML5</h3>
            <h3>CSS3</h3>
            <h3>Javascript</h3>
            <h3>React.js</h3>
            <h3>Jquery</h3>
            <h3>PHP</h3>
            <h3>Laravel</h3>
            <h3>MySql</h3>
          </div>
        </div>

        <div className=" p-0 mt-0">
          <div className="text-base text-cyan-800 mb-0 ">
            <h1>Collaboration</h1>
          </div>
          <div className="text-sm mt-0 md:mt-5 text-base ">
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
