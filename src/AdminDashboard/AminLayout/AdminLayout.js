import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

const AdminLayout = () => {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
