/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Dashboard Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from "react";
import BestSeller from "./BestSeller";
import Charts from "./Charts";
import TableInHome from "./tableMenu/TableInHome";

const HomeDashboard = () => {
  return (
    <div className="flex flex-col">
      {/* this is default home page  */}
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <Charts />
        </div>
        <div className="lg:col-span-2">
          <BestSeller />
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 items-center justify-center">
        <div className="lg:col-span-3">
          <TableInHome />
        </div>
        <div className="lg:col-span-2">
          <BestSeller />
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
