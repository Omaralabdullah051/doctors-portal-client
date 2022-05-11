import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center mx-8 md:mx-0">
            <div className="card-body">
                <h2 className="text-secondary text-2xl font-bold text-center">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className={`btn text-white uppercase ${slots.length === 0 ? 'bg-gray-800' : 'bg-gradient-to-r from-secondary to-primary'}`}>
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;