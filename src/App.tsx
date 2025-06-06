import "./App.css";
import { NavigationMenuDemo } from "./dashboard/navbar";
import Sidebar from "./dashboard/sidebar";
import ChatPopup from "./dashboard/ChatPopup";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="fixed top-0 left-0 w-full z-50 bg-white border-1">
          <NavigationMenuDemo />
        </div>
        <div className="mt-10">
          <div className=""></div> {/* Left space of 200px */}
          <div className="flex-1">
            <Sidebar />
          </div>
          <ChatPopup/>

        </div>
       
      </div>


    </>
  );
}

export default App;
