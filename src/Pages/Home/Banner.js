import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200  mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:pr-20'>
                    <h1 className="text-3xl md:text-5xl font-bold">Your New Smiles Starts Here</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;