import "./App.css";
import Sidebar from "./Components/Layouts/Sidebar";
import TopBar from "./Components/Layouts/TopBar";
import Routing from "./Components/Routing";
import Footer from "./Components/Layouts/Footer";
import MobileMenu from "./Components/Layouts/MobileMenu";

function App() {
  return (
      <div className="flex flex-column h-screen"> 
      <div className="flex flex-grow">
        <MobileMenu/>
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <Routing /> 
          <Footer/>
        </div>   
       
      </div>
   
    </div>
     


  );
}

export default App;