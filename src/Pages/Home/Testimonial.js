import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Reviews from './Reviews';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    return (
        <div>
            <div className=' flex justify-between items-center'>
                <div>
                    <h6 className='text-primary'>Testimonial</h6>
                    <h5>What our patients Says</h5>
                </div>
                <div>
                    <img className='w-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-8 mt-20'>
                <Reviews people={people1} name="Willson" area="California" />
                <Reviews people={people2} name="Pack" area="NewYork" />
                <Reviews people={people3} name="Jack" area="Abu Dhabi" />
            </div>
        </div>
    );
};

export default Testimonial;