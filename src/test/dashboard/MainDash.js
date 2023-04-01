import React from "react";
import DashboardHome from "./DashboardHome";
import DashBoradNav from "./DashBoradNav";

const MainDash = () => {
  return (
    <div className="flex">
      <DashBoradNav />
      <DashboardHome />
    </div>
  );
};

export default MainDash;
