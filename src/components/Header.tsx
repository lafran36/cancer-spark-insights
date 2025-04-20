
import React from "react";
import { Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const diseases = [
    "Heart Disease",
    "Covid",
    "Alzheimer's",
    "Leukemia",
    "Diabetes",
    "Lymphoma",
    "Sarcoma",
    "Lung Cancer",
    "Bronchitis",
    "Liver Disease"
  ];

  return (
    <header className="flex flex-col sm:flex-row justify-between gap-4 items-center py-6">
      <div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-medical-purple to-medical-teal flex items-center justify-center mr-3 relative animate-float shadow-lg">
            <div className="absolute inset-0 rounded-lg bg-white/10 animate-pulse"></div>
            <span className="text-white font-bold text-xl relative z-10">CS</span>
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              Cancer Spark Insights
            </h1>
            <p className="text-muted-foreground">Advanced analytics for cancer research</p>
          </div>
        </div>
      </div>
      
      <Select>
        <SelectTrigger className="w-[200px] glass border-medical-blue/20">
          <SelectValue placeholder="Select disease" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-sm border-medical-blue/20">
          {diseases.map((disease) => (
            <SelectItem key={disease} value={disease.toLowerCase().replace(/\s+/g, '-')}>
              {disease}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};

export default Header;
