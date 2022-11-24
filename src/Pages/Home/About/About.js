import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate, faMobile, faTruck } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return (
       <div className='pl-12 mt-10 md:grid lg:grid-cols-3 md:grid-cols-2 gap-2 bg-base-300 py-10'>

        <div className='mt-8 mx-5 w-48 text-center'>
        <FontAwesomeIcon className='w-10 h-10' icon={faRotate} />
        <h3 className='text-xl font-semibold'>Why Refurbished</h3>
        <h3 className='text-gray-400'>Every product undergoes a rigorous certification.</h3>
        <button className="mt-5 btn btn-outline btn-info">Learn more</button>
        </div>


        <div  className='mt-8 w-56 text-center'>
        <FontAwesomeIcon className='w-10 h-10' icon={faTruck} />
        <h3 className='text-xl font-semibold'>Free next-day delivery</h3>
        <h3 className='text-gray-400'>On select in-stock Apple products ordered by 5:00 p.m.</h3>
        <button className="mt-5 btn btn-outline btn-info">Learn more</button>
        </div>


        <div  className='mt-8 w-56 text-center'>
        <FontAwesomeIcon className='w-10 h-10' icon={faMobile} />
        <h3 className='text-xl font-semibold'>PhoneCare</h3>
        <h3 className='text-gray-400'>Service and support for your refurbished Apple products.</h3>
        <button className="mt-5 btn btn-outline btn-info">Learn more</button>
        </div>


       </div>
    );
};

export default About;