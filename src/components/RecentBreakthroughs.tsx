
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchBreakthroughs } from "@/data/cancerData";

const RecentBreakthroughs = () => {
  return (
    <Card className="data-card">
      <CardHeader>
        <CardTitle>Recent Research Breakthroughs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {researchBreakthroughs.map((item, index) => (
            <div 
              key={index} 
              className="p-4 border border-border rounded-md hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-medical-blue">{item.title}</h3>
                <Badge 
                  variant={item.impact === "high" ? "default" : "outline"}
                  className={item.impact === "high" ? "bg-medical-teal" : ""}
                >
                  {item.impact} impact
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.date} • {item.institution}</p>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBreakthroughs;
