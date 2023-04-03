/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from "react";
import BarChart from "./chart/BarChart";
import BarChart2Main from "./chart/BarChart2Main";
import LineChartMain from "./chart/LineChartMain";
import PieChartMain from "./chart/PieChartMain";

const Charts = () => {
  return (
    <div>
      <h1 className="text-4xl my-8 text-center">All Summary</h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap lg:gap-y-12">
        <BarChart2Main />
        <BarChart />
        <PieChartMain />
        <LineChartMain />
      </div>
    </div>
  );
};

export default Charts;
