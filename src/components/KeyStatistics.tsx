
import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { keyStatistics } from "@/data/cancerData";

const KeyStatistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {keyStatistics.map((stat, index) => (
        <div key={index} className="statistic-card">
          <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="stat-value">{stat.value}</p>
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
        </div>
      ))}
    </div>
  );
};

export default KeyStatistics;
