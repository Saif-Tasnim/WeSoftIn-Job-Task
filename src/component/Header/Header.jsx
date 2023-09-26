import React from 'react';
import img from '../../../public/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#242424] flex justify-around py-8 items-center">
            <div>
                <img src={img} className='w-1/2' alt="" />
            </div>

            <div>
                <Link to="/" className='text-white'> Profile List </Link>
            </div>
        </div>
    );
};

export default Header;