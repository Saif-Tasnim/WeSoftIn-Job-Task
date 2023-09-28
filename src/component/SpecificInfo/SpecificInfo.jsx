import React from 'react';

const SpecificInfo = ({ title, data }) => {
    return (
        <div className='flex gap-5 my-5'>
            <p className='md:font-bold'> {title} : </p>
            <p> {data} </p>
        </div>
    );
};

export default SpecificInfo;