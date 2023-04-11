import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

const AdminLayout = () => {
  return (
    <div className=" flex ">
      {/* test */}
      <div>
        <SideNav />
      </div>
      <div className="mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
