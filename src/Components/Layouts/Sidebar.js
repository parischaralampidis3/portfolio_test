import React from "react";
import Navigation from "./Navigation";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full"> 

      <Navigation />
    </div>
  );
}

export default Sidebar;