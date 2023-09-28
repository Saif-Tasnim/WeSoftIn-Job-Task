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

                <p className="text-content2 text-lg font-bold text-center py-2">{data.name}</p>
                <p className="text-content2 text-center">{data.email}</p>

                <div className="card-footer mt-6 justify-center">
                    <Link to={`/${data.id}`}>
                        <button className="btn-secondary btn">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Card;