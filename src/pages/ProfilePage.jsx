import React from 'react';
import AllData from '../component/AllData/AllData';
import Header from '../component/Header/Header';

const ProfilePage = () => {
    return (
        <div>
            {/* header part */}
            <Header></Header>

            <div className='text-center'>
                <h1 className='my-14 text-xl font-bold underline'>  Profile View List </h1>
            </div>

            {/* load all data from db.json file */}
            <AllData></AllData>
        </div>
    );
};

export default ProfilePage;