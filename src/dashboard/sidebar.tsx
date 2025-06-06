import { useState, useEffect } from "react";


import {
  Menu,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Settings,
  BookOpen,
  Layers,
  ToggleLeftIcon,
  ToggleRightIcon,
} from "lucide-react";
import { MdOutlineEngineering, MdWork, MdTravelExplore,  } from "react-icons/md";
import { cn } from "@/lib/utils"; // ShadCN UI helper
import { DiplayPages } from "@/Diplaypage/DiplayPages";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect if device is mobile & update state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex mt-7">
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-5 left-75 z-50 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-800 transition"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 h-full bg-gray-50 shadow-lg p-4 transition-all duration-300 overflow-y-auto",
          isMobile ? "top-0 h-full z-40 mt-12" : "",
          isOpen ? "w-64" : "w-0 overflow-hidden"
        )}
      >
        {isOpen && (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
                RB
              </div>
              <div className="cursor-pointer">
                <h2 className="text-lg font-semibold">Monocef</h2>
                <p className="text-sm text-gray-500">Enterprise</p>
              </div>
            </div>

            {/* Sidebar Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="text-gray-700">
                <h3 className="text-xs font-semibold uppercase mb-2">Platform</h3>
                <button
                  className="flex items-center justify-between w-full py-2 hover:bg-gray-100 px-2 rounded transition"
                  onClick={() => setPlaygroundOpen(!playgroundOpen)}
                >
                  <span className="flex items-center gap-2">
                    <Layers size={16} /> Playground
                  </span>
                  {playgroundOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {playgroundOpen && (
                  <div className="ml-4 text-gray-600">
                    <p className="py-1 px-2 hover:bg-gray-100 rounded transition cursor-pointer">History</p>
                    <p className="py-1 px-2 hover:bg-gray-100 rounded transition cursor-pointer">Starred</p>
                    <p className="py-1 px-2 hover:bg-gray-100 rounded transition cursor-pointer">Settings</p>
                  </div>
                )}

                <p className="py-2 px-2 hover:bg-gray-100 rounded transition flex items-center gap-2 cursor-pointer">
                  <Briefcase size={16} /> Models
                </p>
                <p className="py-2 px-2 hover:bg-gray-100 rounded transition flex items-center gap-2 cursor-pointer">
                  <BookOpen size={16} /> Documentation
                </p>
                <p className="py-2 px-2 hover:bg-gray-100 rounded transition flex items-center gap-2 cursor-pointer">
                  <Settings size={16} /> Settings
                </p>
              </div>

              {/* Projects Section */}
              <div className="mt-6 text-gray-700">
                <h3 className="text-xs font-semibold uppercase mb-2">Projects</h3>
                <p className="flex items-center py-2 px-2 hover:bg-gray-100 rounded transition cursor-pointer">
                  <MdOutlineEngineering className="mr-2" /> Design Engineering
                </p>
                <p className="flex items-center py-2 px-2 hover:bg-gray-100 rounded transition cursor-pointer">
                  <MdWork className="mr-2" /> Sales & Marketing
                </p>
                <p className="flex items-center py-2 px-2 hover:bg-gray-100 rounded transition cursor-pointer">
                  <MdTravelExplore className="mr-2" /> Travel
                </p>
                <p className="py-2 px-2 hover:bg-gray-100 rounded transition cursor-pointer">More</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay on Mobile to Close Sidebar */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 "
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${isOpen && !isMobile ? "ml-64" : "ml-0"}`}
      >
        <div className=" w-1 h-1 cursor-pointer fixed">
          {/* Toggle Sidebar Button for Desktop */}
          {!isMobile && (
            <button onClick={() => setIsOpen(!isOpen)} className="p-3  cursor-pointer rounded  bg-gray-50 hover:text-white rounded-br-4xl hover:bg-gray-500 transition">
                         {isOpen ? <ToggleRightIcon size={24} /> : <ToggleLeftIcon size={24} />}
                         
            </button>
          )}
         

        </div>
        <div className="w-full h-full bg-amber-600">
           <DiplayPages />
        </div>
      </div>
    </div>
  );
}
