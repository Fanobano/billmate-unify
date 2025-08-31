import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface InsightsChartProps {
  type: "monthly" | "category";
}

const monthlyData = [
  { month: "Jan", amount: 98.50 },
  { month: "Feb", amount: 112.30 },
  { month: "Mar", amount: 127.95 },
  { month: "Apr", amount: 115.40 },
  { month: "May", amount: 134.20 },
  { month: "Jun", amount: 127.95 },
];

const categoryData = [
  { name: "Entertainment", value: 45.98, color: "hsl(var(--primary))" },
  { name: "Software", value: 52.99, color: "hsl(var(--secondary))" },
  { name: "Music", value: 9.99, color: "hsl(var(--accent))" },
  { name: "Development", value: 4.00, color: "hsl(var(--muted))" },
  { name: "Other", value: 14.99, color: "hsl(var(--destructive))" },
];

const InsightsChart: React.FC<InsightsChartProps> = ({ type }) => {
  if (type === "monthly") {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-muted-foreground"
              fontSize={12}
            />
            <YAxis 
              className="text-muted-foreground"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, "Amount"]}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px"
              }}
            />
            <Bar 
              dataKey="amount" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`$${value}`, "Amount"]}
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              color: "hsl(var(--foreground))"
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsightsChart;