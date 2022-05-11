import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-3 text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;