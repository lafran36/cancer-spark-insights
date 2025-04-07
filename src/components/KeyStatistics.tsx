
import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { keyStatistics } from "@/data/cancerData";
import { Progress } from "@/components/ui/progress";

const KeyStatistics = () => {
  // Calculate progress values based on the statistics data
  const getProgressValue = (stat) => {
    // Convert percentage strings to numbers for progress bars
    if (typeof stat.value === "string" && stat.value.includes("%")) {
      return parseFloat(stat.value);
    }
    // For funding amounts (in billions), scale appropriately (e.g., 6.8B → 68%)
    if (typeof stat.value === "string" && stat.value.includes("B")) {
      return parseFloat(stat.value) * 10;
    }
    // For simple numbers (thousands), scale to a reasonable percentage
    return Math.min(parseFloat(stat.value) / 100, 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {keyStatistics.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border-l-4 border-medical-blue"
        >
          <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold bg-gradient-to-r from-medical-blue to-medical-purple bg-clip-text text-transparent">
              {stat.value}
            </p>
            <span className={`ml-2 text-sm font-medium ${
              stat.trend === "up" ? "text-green-600" : "text-red-600"
            } flex items-center`}>
              {stat.trend === "up" ? (
                <ArrowUpIcon className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 mr-1" />
              )}
              {stat.change}
            </span>
          </div>
          <div className="mt-2">
            <Progress value={getProgressValue(stat)} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyStatistics;
