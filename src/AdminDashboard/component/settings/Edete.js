import React from 'react';
import AddBrand from './SettingComponent/AddBrand';
import AddCategory from './SettingComponent/AddCategory';

const Edete = () => {
    return (
        <div className='flex'>
            {/* Add Category */}
            <div className='mr-5'>
            <AddCategory/>
            </div>
            {/* add brand */}
            <div>
            <AddBrand/>
            </div>
        </div>
    );
};

export default Edete;