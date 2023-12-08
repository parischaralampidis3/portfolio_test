import "./App.css";
import Sidebar from "./Components/Layouts/Sidebar";
import TopBar from "./Components/Layouts/TopBar";
import Routing from "./Components/Routing";
function App() {
  return (
  
      
    <div className="App flex flex-column">  
    <Sidebar/>
      <div className="w-full">
      <TopBar/> 
        <Routing/>
        </div>
     
   
  
    </div>

   
    
  );
}

export default App;
