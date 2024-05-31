import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../styles/TasksByPriorityChart.css";

const data = [
  { name: "High", value: 10 },
  { name: "Medium", value: 15 },
  { name: "Low", value: 20 },
];

const COLORS = ["#FF0000", "#FFFF00", "#0000FF"];

const TasksByPriorityChart = () => {
  return (
    <div className="tasks-priorities-container">
      <h2 className="tasks-priorities-title">Tasks Priorities</h2>
      <PieChart width={440} height={253}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <text x={120} y={80} fontSize={16} textAnchor="middle" fill="#757575">
            High
          </text>
          <text
            x={120}
            y={100}
            fontSize={16}
            textAnchor="middle"
            fill="#757575"
          >
            Medium
          </text>
          <text
            x={120}
            y={120}
            fontSize={16}
            textAnchor="middle"
            fill="#757575"
          >
            Low
          </text>
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </div>
  );
};

export default TasksByPriorityChart;
