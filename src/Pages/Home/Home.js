import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-4 md:px-20'>
            <Banner />
            <Info />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;