import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Views/Home";
import Work from "./Views/Work";
import Contact from "./Views/Contact";
import About from "./Views/About";
import Adadjento from "./Views/UseCases/Adadjento";
import EnglishGallera from "./Views/UseCases/EnglishGallera";
import GustavToFroyd from "./Views/UseCases/GustavToFroyd";
import WhatIsThis from "./Views/UseCases/WhatIsThis";
import DutchShip from "./Views/UseCases/DutchShip";
import AmericoVespouci from "./Views/UseCases/AmericoVespouci";
import LetMeStand from "./Views/UseCases/LetMeStand";
import Leopard from "./Views/UseCases/Leopard";
import Peackok from "./Views/UseCases/Peackok";
import Shtandart from "./Views/UseCases/Shtandart";
import Rooster from "./Views/UseCases/Rooster";
import Boat from "./Views/UseCases/Boat";
import Alexander from "./Views/UseCases/Alexander";
import Seahorse from "./Views/UseCases/Seahorse";
import Bull from "./Views/UseCases/Bull";
import OliveField from "./Views/UseCases/OliveField";
import ChargingBull from "./Views/UseCases/ChargingBull";
import Ship from "./Views/UseCases/Ship";
import Vezouvio from "./Views/UseCases/Vezouvio";
import Geisha from "./Views/UseCases/Geisha";
import EgyptianSlave from "./Views/UseCases/EgyptianSlave";
import ChineseNoblewoman from "./Views/UseCases/ChineseNoblewoman";
import Reflection from "./Views/UseCases/Reflection";
import Tree from "./Views/UseCases/Tree";
import Nude from "./Views/UseCases/Nude";
import Flamingos from "./Views/UseCases/Flamingos";


function Routing (){
    return(
        <div className=" flex ">

           <Router>
            <Routes>
                
                <Route path="/" element={<Home />}/>
                <Route path="/work" element={<Work />}/>

                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>

                <Route path="/adadjento" element={<Adadjento/>}/>
                <Route path="/englishGallera" element={<EnglishGallera/>}/>
                <Route path = "/whatIsThis" element={<WhatIsThis/>}/>
                <Route path = "/gustavToFroyd" element={<GustavToFroyd/>}/>
                <Route path = "/dutchShip" element={<DutchShip/>}/>
                <Route path = "/americoVespouci" element={<AmericoVespouci/>}/>
                <Route path = "/letMeStand" element={<LetMeStand/>}/>
                <Route path = "/leopard" element={<Leopard/>}/>
                <Route path = "/peackok" element={<Peackok/>}/>
                <Route path = "/shtandart" element={<Shtandart/>}/>
                <Route path = "/rooster" element={<Rooster/>}/>
                <Route path = "/boat" element={<Boat/>}/>
                <Route path = "/alexander" element={<Alexander/>}/>
                <Route path = "/seahorse" element = {<Seahorse/>}/>
                <Route path = "/flamingos" element = {<Flamingos/>}/>
                <Route path = "/bull" element = {<Bull/>}/>
                <Route path = "/oliveField" element = {<OliveField/>}/>
                <Route path = "/chargingBull" element = {<ChargingBull/>}/>
                <Route path = "/ship" element = {<Ship/>}/>
                <Route path = "/vezouvio" element = {<Vezouvio/>}/>
                <Route path = "/geisha" element = {<Geisha/>}/>
                <Route path = "/egyptianSlave" element = {<EgyptianSlave/>}/>
                <Route path = "/chineseNoblewoman" element = {<ChineseNoblewoman/>}/>
                <Route path = "/reflection" element = {<Reflection/>}/>
                <Route path = "/tree" element = {<Tree/>}/>
                <Route path = "/nude" element = {<Nude/>}/>
                

           </Routes>
            </Router> 
        </div>
    )
    }

export default Routing;