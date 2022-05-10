import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const bg = "bg-gradient-to-r from-secondary to-primary";
    const bg2 = "bg-accent";
    const text = "Opening Hours";
    const text2 = "Visit Our Location";
    const text3 = "Contact Us Now";
    const description = "Lorem Ipsum is simply dummy text of the pri";
    const description2 = "Brooklyn, NY 10036, United States";
    const description3 = "+000 123 456789";
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} bg={bg} title={text} description={description} />
            <InfoCard img={marker} bg={bg2} title={text2} description={description2} />
            <InfoCard img={phone} bg={bg} title={text3} description={description3} />
        </div>
    );
};

export default Info;