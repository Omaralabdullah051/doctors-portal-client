import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="mb-20 p-8">
            <form>
                <h6 className='text-primary'>Contact Us</h6>
                <input className='w-80 my-2 rounded h-7 pl-3 block mx-auto' type="text" name="" id="" placeholder='Email address' />
                <input className='w-80 my-2 rounded h-7 pl-3 block mx-auto' type="text" name="" id="" placeholder='Subject' />
                <textarea className='w-80 my-2 rounded h-40 pl-3 pt-2 block mx-auto' type="text" name="" id="" placeholder='Your Message' />
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default ContactUs;