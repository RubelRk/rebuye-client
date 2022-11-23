import React from 'react';
import categories3 from '../../../assets/image/rebuy phone logo.png'

const AdvertisedItems = () => {
    return (
        <div>
        <h3 className='text-center my-10 text-4xl'>Advertise Phone</h3>
        <hr className='w-48 mx-auto' />
         <div className='mx-10 my-10 lg:grid grid-cols-3 gap-4 '>
            {/* categories1 */}
           <div className="card lg:w-96 bg-base-300 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={categories3}  alt="Shoes" className=" h-48 rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">iPhone</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="normal-case btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AdvertisedItems;