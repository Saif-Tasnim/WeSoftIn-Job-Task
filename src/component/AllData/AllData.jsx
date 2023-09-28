import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/features/dataSlicer';
import Card from './Card';

const AllData = () => {
    const count = useSelector((state) => state.storedData.value)

    const data = count?.[0] || 0;
    console.log(data);

    return (
        <div className='w-3/4 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-y-10'>
            {
                data.length > 0
                    ?
                    data?.map((d) => <>
                        <Card
                            key={d.id}
                            data={d}
                        />

                    </>)
                    : ""
            }
        </div>
    );
};

export default AllData;