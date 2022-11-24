import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductDetails from './AllProductDetails';

const AllProduct = () => {
    const allProduct = useLoaderData();
    return (
        <div>
            <div className='text-center text-4xl mt-5'>
                <h3>Resale Phone</h3>
                <hr className='w-56 mx-auto' />
                <h3 className='mt-5'>Total Product: {allProduct.length}</h3>
                <hr className='w-36 mx-auto'  />
            </div>

            {
                allProduct.map(product =><AllProductDetails
                key={product._id}
                product={product}
                ></AllProductDetails>)
            }
        </div>
    );
};

export default AllProduct;