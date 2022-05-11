import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className=' flex justify-center items-center mb-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-8 md:p-0 space-y-3'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment today</h2>
                <p className='text-white md:pr-10 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti dolore similique, reiciendis non dolores aperiam beatae at cum. Nemo saepe veniam delectus expedita sed maiores, enim ipsa quae sunt at cum quia commodi in dolores. Quia culpa debitis alias mollitia eveniet delectus aliquid eum, adipisci suscipit odit quisquam ea incidunt hic unde autem! Impedit, soluta perferendis officiis aliquid quo id, doloremque laudantium ab provident voluptatem deleniti, quidem est atque quos maiores perspiciatis expedita fugit molestias omnis. Quos, laboriosam voluptas!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;