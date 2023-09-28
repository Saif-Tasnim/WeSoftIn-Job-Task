import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <div className="card card-image-cover">
            <div className='text-center pt-6'>
                <Avatar img={data.profile_picture_url} />
            </div>

            <div className="card-body">

                <p className="text-content2 text-sm md:text-base font-bold text-left md:text-center py-2">{data.name}</p>
                <p className="text-content2 text-xs md:text-base text-left md:text-center py-2">{data.email}
                </p>

                <div className="card-footer mt-6 justify-center">
                    <Link to={`/${data.id}`}>
                        <button className="btn-secondary btn text-xs md:text-base">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Card;