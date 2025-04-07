
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Beaker, Microscope, TestTube } from "lucide-react";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: "Dashboard", 
      path: "/", 
      icon: <Beaker className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Research Areas", 
      path: "/research-areas", 
      icon: <Microscope className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Clinical Trials", 
      path: "/clinical-trials", 
      icon: <TestTube className="h-5 w-5 mr-2" /> 
    }
  ];

  return (
    <nav className="flex space-x-2 overflow-x-auto pb-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
            location.pathname === item.path
              ? "bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-md"
              : "text-muted-foreground hover:text-primary hover:bg-muted"
          )}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
