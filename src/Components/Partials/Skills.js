import React from "react";
import "../../Profile.css";

function Skills() {
  return (
    <div className=" mt-12 p-3 mx-auto  w-2/5">
      <div className="container h-3/4 bg-cyan-700 ">
        <h1 className="font-semibold text-white p-3">Skills</h1>
      </div>
      
      <div class="grid grid-cols-3 ">

                <div className="p-1">
                        <div className="text-base text-cyan-800 mt-4 lg:mx-14 text-lg">
                        <h1>Design</h1>
                        </div>
                        <div className="mt-5 text-base lg:mx-14 text-lg">
                        <h3>Figma</h3>
                        <h3>Adobe XD</h3>
                        </div>
                    </div>

                    <div className="mx-0 p-5">
                        <div className="text- text-cyan-800 mb-5 lg:text-lg">
                        <h1>Code</h1>
                        </div>
                        <div className="mt-5 text-base lg:text-lg">
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

                    <div className="p-5 mx-2">
                        <div  className="text-base text-cyan-800 mb-5  lg:text-lg">
                        <h1>Collaboration</h1>
                        </div>
                        <div>
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
