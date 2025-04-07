
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <div>
        <h1 className="text-2xl font-bold text-medical-blue">Cancer Spark Insights</h1>
        <p className="text-muted-foreground">Advanced analytics for cancer research</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search research data..." 
            className="pl-10 w-[250px]"
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>
    </header>
  );
};

export default Header;
