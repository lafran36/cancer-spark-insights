
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinicalTrialsData } from "@/data/cancerData";

const ClinicalTrialsChart = () => {
  return (
    <Card className="data-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Clinical Trials by Phase</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={clinicalTrialsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ 
                value: "Number of Trials", 
                angle: -90, 
                position: "insideLeft" 
              }} />
              <Tooltip formatter={(value) => [`${value} trials`, "Count"]} />
              <Bar dataKey="value" fill="#553C9A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClinicalTrialsChart;
