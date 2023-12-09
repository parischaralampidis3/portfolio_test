import React from "react";
import Profile from "../Partials/Profile";
import Gallery from "../Partials/Gallery";
import Skills from "../Partials/Skills";
function Home (){
    return(
    <div className="mt-5">
        
        <Profile/> 
       
        <Gallery/> 
         <Skills/>
      
    </div>
    
    )
}
export default Home;