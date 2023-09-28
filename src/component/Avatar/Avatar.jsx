import React from 'react';

const Avatar = ({ img }) => {
    return (
        <div className="avatar avatar-ring-primary">
            <img src={img} alt="avatar"

            />
        </div>
    );
};

export default Avatar;