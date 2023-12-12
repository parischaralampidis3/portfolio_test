import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Views/Home";
import Work from "./Views/Work";
import Contact from "./Views/Contact";
import About from "./Views/About";
import Blogger from "./Views/UseCases/Blogger";
import Lang from "./Views/UseCases/Lang";
import ProductList from "./Views/UseCases/ProductList";



function Routing (){
    return(
        <div className=" flex ">

           <Router>
            <Routes>
                
                <Route path="/" element={<Home />}/>
                <Route path="/work" element={<Work />}/>

                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>

                <Route path="/blogger" element={<Blogger/>}/>
                <Route path="/lang" element={<Lang/>}/>
                <Route path = "/productList" element={<ProductList/>}/>
           </Routes>
            </Router> 
        </div>
    )
    }

export default Routing;