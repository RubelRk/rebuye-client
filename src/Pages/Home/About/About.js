import React from 'react';
import image1 from  '../../../assets/image/republic-karelia.webp';
import image2 from  '../../../assets/image/beautiful-girl.webp';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='d-lg-flex mb-5'>
           <div className='w-50 mt-sm-5 mb-5 pb-5 position-relative'>
            <img className='ms-3' src={image1} width="500px" alt=""/>
            <img className='d-flex justify-content-end position-absolute start-50 top-50 pe-2 border-start border-top border-5 border-white'  width="250px" height="220px" src={image2} alt=""/>
           </div>
           <div className='ms-5 ms-lg-0 w-50 my-sm-5'>
            <h3  className='fs-3 fw-semibold my-3 text-warning'>About Us</h3>
            <h1 className='fs-1 fw-bold mb-3'>WE OVER 20 YEARS EXPERIENCE</h1>
            <p className='mb-5'>Experience refers to conscious events in general, more specifically to perceptions, or to the practical knowledge and familiarity that is produced by these conscious processes. Understood as a conscious event in the widest sense, experience involves a subject to which various items are presented.</p>
           <Link to='/about'> <button className="btn btn-outline-warning px-5 py-3">About Us</button></Link>

           </div>
        </div>
    );
};

export default About;