
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchFundingData } from "@/data/cancerData";

const FundingTrendChart = () => {
  return (
    <Card className="data-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Research Funding Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={researchFundingData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis
                domain={[5, 8]}
                tickFormatter={(value) => `$${value}B`}
                label={{ 
                  value: "Funding (Billions USD)", 
                  angle: -90, 
                  position: "insideLeft" 
                }}
              />
              <Tooltip formatter={(value) => [`$${value} billion`, "Funding"]} />
              <Line
                type="monotone"
                dataKey="funding"
                stroke="#2C5282"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundingTrendChart;
