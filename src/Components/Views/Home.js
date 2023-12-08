import React from "react";
import Profile from "../Partials/Profile";
import Gallery from "../Partials/Gallery";
function Home (){
    return(
    <div className="mt-5">
        <Profile/>
        <Gallery/>
    </div>
    
    )
}
export default Home;