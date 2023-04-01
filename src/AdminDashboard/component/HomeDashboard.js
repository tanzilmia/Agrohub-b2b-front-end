/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making Admin Layout components
            @timestap: 1/4/23 - Saturday - Morning
*/
import React from 'react';
import Charts from './Charts';
import TableInHome from './TableInHome';

const HomeDashboard = () => {
    return (
        <div>
            {/* this is default home page  */}
            <Charts />
            <TableInHome/>
        </div>
    );
};

export default HomeDashboard;