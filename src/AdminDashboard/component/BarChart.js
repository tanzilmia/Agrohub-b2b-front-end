/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

const BarChart = () => {
  //Example of 3 different data sets
  const data1 = [3, 1, 5, 8, 20, 10, 15, 30];
  const data2 = [2, 3, 10, 5, 5, 9, 10, 10];
  const total = data1.map((num, idx) => num + data2[idx]);
  //Inside data props
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Data1",
        data: data1,
        backgroundColor: "rgba(87, 121, 234, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
        order: 1,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Data2",
        data: data2,
        backgroundColor: "rgba(18, 200, 150, 0.6)",
        borderColor: "rgba(18, 200, 150, 0.6)",
        order: 1,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Total",
        data: total,
        backgroundColor: "rgba(234, 87, 102, 0.6)",
        borderColor: "rgba(234, 87, 102, 0.6)",
        fill: false,
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5,
        type: "line",
        order: 0,
      },
    ],
  };

  const options = {
    Plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 6,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} className="w-2/3" />
    </div>
  );
};

export default BarChart;
