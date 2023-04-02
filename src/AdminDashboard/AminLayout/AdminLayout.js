<<<<<<< .merge_file_a08028
=======
/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
>>>>>>> .merge_file_a12416
import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";

const AdminLayout = () => {
  return (
<<<<<<< .merge_file_a08028
    <div>
=======
    <div className="flex">
>>>>>>> .merge_file_a12416
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
