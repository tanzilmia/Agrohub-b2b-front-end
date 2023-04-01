/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
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
