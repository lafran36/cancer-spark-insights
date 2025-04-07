
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { survivalRateData } from "@/data/cancerData";

const SurvivalRateTrend = () => {
  return (
    <Card className="data-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">5-Year Survival Rate Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={survivalRateData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                domain={[50, 80]}
                tickFormatter={(value) => `${value}%`}
                label={{ 
                  value: "5-Year Survival Rate", 
                  angle: -90, 
                  position: "insideLeft" 
                }}
              />
              <Tooltip formatter={(value) => [`${value}%`, "Survival Rate"]} />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#285E61"
                fill="#E6FFFA"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurvivalRateTrend;
