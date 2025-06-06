"use client";

import logo from "@/assets/logo.png";
import {  FaReact } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { imageData } from "../Data/DataAI"; // ✅ Ensure this is correct


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRightIcon } from "lucide-react";
import {DataEngineering} from "../Data/Data"
import { useState } from "react";
import ContactPopup from "@/Data/PopCOntactBtn";

// ✅ Data List for AI & Engineering


export function NavigationMenuDemo() {
const [isOpenContact,setIsOpenContact]=useState<boolean>(false);


  

  return (
   <div>
    <NavigationMenu>
      {/* Logo Section */}
      <div className="mr-10 flex items-center">
        <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />
        <span className="text-xl font-bold text-gray-800">Monocef</span>
      </div>

      {/* Navigation Menu */}
      <NavigationMenuList className="hidden sm:flex">
        {/* Data Analysis */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Data Analysis</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <span className="ml-5 font-bold text-gray-800">Data Analysis</span>
                <FaReact className="w-6 h-6 text-gray-500" />
              </div>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 w-[900px]">
                {DataEngineering.map((component) => (

                  <li key={component.id} className="rounded-lg border p-3 hover:bg-gray-200 transition">
                     <NavigationMenuItem>

                    <a href={component.href} className="flex items-center gap-4">
                      <span className={cn("p-3 shadow-md rounded-lg", component.bgColor)}>
                        {component.icon}
                      </span>
                      <div>
                        <h1 className="text-sm font-semibold">{component.heading}</h1>
                        <p className="text-xs text-gray-600">{component.description}</p>
                      </div>
                    </a>
                    </NavigationMenuItem>
                  </li>
                ))}
              </ul>
           
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Data Engineering */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Data Analysis</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <span className="ml-5 font-bold text-gray-800">Data Analysis</span>
                <FaReact className="w-6 h-6 text-gray-500" />
              </div>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 w-[900px]">
                {DataEngineering.map((component) => (

                  <li key={component.id} className="rounded-lg border p-3 hover:bg-gray-200 transition">
                     <NavigationMenuItem>

                    <a href={component.href} className="flex items-center gap-4">
                      <span className={cn("p-3 shadow-md rounded-lg", component.bgColor)}>
                        {component.icon}
                      </span>
                      <div>
                        <h1 className="text-sm font-semibold">{component.heading}</h1>
                        <p className="text-xs text-gray-600">{component.description}</p>
                      </div>
                    </a>
                    </NavigationMenuItem>
                  </li>
                ))}
              </ul>
           
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Data Analysis</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <span className="ml-5 font-bold text-gray-800">Data Analysis</span>
                <FaReact className="w-6 h-6 text-gray-500" />
              </div>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 w-[900px]">
                {DataEngineering.map((component) => (

                  <li key={component.id} className="rounded-lg border p-3 hover:bg-gray-200 transition">
                     <NavigationMenuItem>

                    <a href={component.href} className="flex items-center gap-4">
                      <span className={cn("p-3 shadow-md rounded-lg", component.bgColor)}>
                        {component.icon}
                      </span>
                      <div>
                        <h1 className="text-sm font-semibold">{component.heading}</h1>
                        <p className="text-xs text-gray-600">{component.description}</p>
                      </div>
                    </a>
                    </NavigationMenuItem>
                  </li>
                ))}
              </ul>
           
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
        {/* More Link */}
        <NavigationMenuItem>
          
            <NavigationMenuLink  href="/docs" className={navigationMenuTriggerStyle()}>More</NavigationMenuLink>
          
        </NavigationMenuItem>

        {/* Contact & Dashboard Buttons */}
        <div className="hidden lg:flex items-center space-x-8 p-4 ml-70">
          <Button className="cursor-pointer" variant="outline" onClick={()=>setIsOpenContact(true)}>
            Contact
          </Button>
          <Button  variant="soft" className="cursor-pointer">
            Dashboard <ArrowRightIcon />
          </Button>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
 {isOpenContact &&<ContactPopup isOpen={isOpenContact} onClose={()=>setIsOpenContact(false)}/>}

   </div> 
  );
}

