import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Views/Home";
import Work from "./Views/Work";
import Contact from "./Views/Contact";
import About from "./Views/About";

function Routing (){
    return(
        <div className=" mx-16 h-1/2 w-5/5">

           <Router>
            <Routes>
                
                <Route path="/" element={<Home />}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            </Router> 
        </div>
    )
}

export default Routing;