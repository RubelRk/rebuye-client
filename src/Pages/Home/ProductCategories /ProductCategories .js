import React from 'react';
import { Link } from 'react-router-dom';
import categories1 from '../../../assets/image/iphone.png'
import categories2 from '../../../assets/image/Samsung2.png'
import categories3 from '../../../assets/image/Xiaomi-12-removebg.png'

const ProductCategories  = () => {


    return (
       <div>
        <h3 className='text-center mt-10 mb-2 text-4xl'>Rebuy Phone Categories </h3>
        <hr className='w-48 mx-auto' />

         <div className='mx-10 my-10 lg:grid grid-cols-3 gap-4 '>

            {/* categories1 */}
           <div className="card lg:w-96 bg-base-300 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={categories1} alt="Shoes" className=" h-48 rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">iPhone</h2>
                    <p>Refurbished iOS devices will come with new battery and outer shell.</p>
                    <div className="card-actions">
                    <button className="normal-case btn btn-primary"> <Link to={`/ProductCategoriesDetails/1`}>All Product</Link> </button>
                    </div>
                </div>
            </div>
            {/* categories2 */}
            <div className="my-10 lg:my-0  card lg:w-96 bg-base-300 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={categories2} alt="Shoes" className=" h-48 rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Samsung</h2>
                    <p>Affordable option with Samsung's Certified Re-Newed program.</p>
                    <div className="card-actions">
                    <button className="normal-case btn btn-primary"> <Link to={`/ProductCategoriesDetails/2`}>All Product</Link> </button>
                    </div>
                </div>
            </div>
            {/* categories3 */}
           
            <div className="card lg:w-96 bg-base-300 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={categories3} alt="Shoes" className=" h-48 rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Xiaomi</h2>
                    <p>The new and improved refurbished xiaomi phone. Also shop for phone at best prices on AliExpress!</p>
                    <div className="card-actions">
                    <button className="normal-case btn btn-primary"> <Link to={`/ProductCategoriesDetails/3`}>All Product</Link> </button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ProductCategories ;