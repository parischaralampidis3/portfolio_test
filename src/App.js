import "./App.css";
import Sidebar from "./Components/Layouts/Sidebar";
import TopBar from "./Components/Layouts/TopBar";
import Routing from "./Components/Routing";

function App() {
  return (
      <div className="flex flex-column h-screen"> 
      <div className="flex flex-grow">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <Routing />
        </div>
      </div>
    </div>
     


  );
}

export default App;