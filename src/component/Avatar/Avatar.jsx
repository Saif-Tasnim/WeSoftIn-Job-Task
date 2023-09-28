import React from 'react';

const Avatar = ({ img, flag = 0 }) => {
    return (
        <div className={`${flag == 1 ? 'avatar  w-40 h-20' : 'avatar avatar-ring-primary'}`}>
            <img src={img} alt="avatar"
                className={`${flag == 1 ? "w-full" : ""}`}
            />
        </div>
    );
};

export default Avatar;