import React from 'react';
import AllData from '../component/AllData/AllData';


const ProfilePage = () => {
    return (
        <div>
            <div className='text-left mx-1 md:text-center md:mx-0'>
                <h1 className='text-md my-14 md:text-xl font-bold underline'>  Profile View List </h1>
            </div>

            {/* load all data from db.json file */}
            <AllData></AllData>
        </div>
    );
};

export default ProfilePage;