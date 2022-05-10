import React from 'react';

const Reviews = ({ people, name, area }) => {
    return (
        <div className='text-left space-y-3 shadow-xxl border-2 rounded p-4 md:mb-20 font-semibold'>
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='flex justify-center items-center'>
                <img className="rounded-full ring-4 ring-teal-500" src={people} alt="" />
                <div className='ml-4'>
                    <h6>{name}</h6>
                    <p>{area}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;