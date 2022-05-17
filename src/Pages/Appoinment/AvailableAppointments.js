import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data: services ,isLoading, refetch} = useQuery(['available',formattedDate], () => fetch(`https://intense-wildwood-88392.herokuapp.com/available?date=${formattedDate}`).then(res => res.json()))
                
    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='mb-20'>
            <p className='text-center text-secondary font-bold text-gradient-to-r from-secondary to-primary'>Available Appoinments on {format(date, 'PP')}</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;