/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../component/SideNav';

const AdminLayout = () => {
    return (
        <div>
            <div>
                <SideNav/>
            </div>
            <div>
            <Outlet/>
           </div>
        </div>
        
       
       
        
    );
};

export default AdminLayout;