
import React from "react";
import { Search, Bell, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between gap-4 items-center py-6">
      <div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-medical-purple to-medical-teal flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">CS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              Cancer Spark Insights
            </h1>
            <p className="text-muted-foreground">Advanced analytics for cancer research</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search research data..." 
            className="pl-10 w-[250px] rounded-full"
          />
        </div>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Need help?</h4>
              <p className="text-sm text-muted-foreground">
                Browse through our comprehensive cancer research data or use the search bar to find specific information.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="outline" className="rounded-full">Filters</Button>
      </div>
    </header>
  );
};

export default Header;
