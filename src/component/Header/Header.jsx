import React from 'react';
import img from '/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#242424] flex flex-col gap-y-5 md:flex-row md:justify-around py-8 md:items-center">
            <div>
                <img src={img} className='w-1/2' alt="" />
            </div>

            <div>
                <Link to="/" className='text-white hidden md:block'> Profile List </Link>
            </div>
        </div>
    );
};

export default Header;