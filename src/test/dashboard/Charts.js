import React from "react";
import BarChart from "./BarChart";

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
      <BarChart />
      <BarChart />
      <BarChart />
      <BarChart />
      <BarChart />
      <BarChart />
    </div>
  );
};

export default Charts;
