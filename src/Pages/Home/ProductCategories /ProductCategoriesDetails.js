import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCategoriesDetails = () => {
    const productDetails = useLoaderData();
    return (
        <div>
            <h3 className='lg:w-1/2 mx-auto text-2xl my-5'>Total Phone: {productDetails.length}</h3>

            {
                productDetails.map(productDetail=><section key={productDetail._id}>
                    <div className='lg:w-1/2 mx-auto'>
                    <div className="m-5 card md:card-side bg-base-300 shadow-xl">
                    <figure><img className='w-36 h-56 m-5 rounded-xl' src={productDetail.picture} alt="Movie"/></figure>
                <div className="card-body">
        
                        <h2 className="card-title">Brand: {productDetail.Product_Name}</h2>
        
                        <div className='md:flex justify-around'>
                        { productDetail.roll === 'Seller' ? 
                        
                        <p>Seller: {productDetail.seller_name} <small className='text-info'>Verified Seller</small>
                       <input type="checkbox" checked disabled className="checkbox checkbox-sm" /> 
                        </p>
                         : 
                         <p>Seller: {productDetail.seller_name}</p> 
                        }
                            <p>Location: {productDetail.location}</p>
                        
                        </div>
                  
        
                            <div className='md:flex justify-around'>
                                <p className='text-accent-focus'>Original_Price: {productDetail.original_price}</p>
                                <p className='text-accent-focus'>Resale_Price: {productDetail.resale_price}</p>
                                
                            </div>
                            <p>Use_Time: {productDetail.years_of_use}</p>
                            <p>Release_Time: {productDetail.posted_time}</p>
                        
        
                            <div className="card-actions justify-end">
                                <button className="normal-case btn btn-primary">Book Now</button>
                            </div>
                    </div>
              </div>
        
            </div>
        </section>
                )
            }
        </div>
    );
};

export default ProductCategoriesDetails;