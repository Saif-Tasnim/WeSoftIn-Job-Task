import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { findUser } from '../redux/features/dataSlicer';
import { AuthContext } from '../hooks/AuthProvider';
import Avatar from '../component/Avatar/Avatar';
import SpecificInfo from '../component/SpecificInfo/SpecificInfo';

const SinglePage = () => {
    const { id } = useParams();
    const { findSingleUser } = useContext(AuthContext);

    findSingleUser(id);

    const count = useSelector((state) => state.storedData.singleValue);

    // console.log(count);

    return (
        <div className='w-3/4 mx-auto border-2 border-gray-300 my-10 px-8 py-14 rounded-md shadow-lg'>

            <div className='text-center'>
                <Avatar 
                img={count.profile_picture_url}
                flag="1"
                />
            </div>

            <div className='mt-14'>
                {/* name */}
                <SpecificInfo
                    key={count?.id}
                    title="User Name"
                    data={count?.name}
                ></SpecificInfo>

                {/* email */}
                <SpecificInfo
                    key={count?.id}
                    title="Email"
                    data={count?.email}
                ></SpecificInfo>

                {/* phone */}
                <SpecificInfo
                    key={count?.id}
                    title="Phone"
                    data={count?.phone}
                ></SpecificInfo>

                {/* address */}
                <SpecificInfo
                    key={count?.id}
                    title="Address"
                    data={count?.address}
                ></SpecificInfo>

                {/* dob */}
                <SpecificInfo
                    key={count?.id}
                    title="Date Of Birth"
                    data={count?.dob}
                ></SpecificInfo>

                {/* marital status */}
                <SpecificInfo
                    key={count?.id}
                    title="Marital Status"
                    data={count?.marital_status}
                ></SpecificInfo>

                {/* gender */}
                <SpecificInfo
                    key={count?.id}
                    title="Gender"
                    data={count?.gender}
                ></SpecificInfo>

                {/* profession */}
                <SpecificInfo
                    key={count?.id}
                    title="Profession"
                    data={count?.current_profession}
                ></SpecificInfo>

                <div className='flex justify-end mr-10 mt-8'>
                    <button className='bg-green-500 rounded-md px-3 py-1 text-white'>
                        <Link to="/">Back to Previous Page </Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default SinglePage;