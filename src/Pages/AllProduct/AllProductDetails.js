import React from "react";
import useTitle from "../../hooks/useTitle";

const AllProductDetails = ({ product }) => {
  useTitle("AllProductDetails");
  const {
    Product_Name,
    location,
    original_price,
    picture,
    posted_time,
    resale_price,
    seller_name,
    years_of_use,
    Brand,
  } = product;

  return (
    <div className="lg:w-1/2 mx-auto">
      <div className="m-5 card md:card-side bg-base-300 shadow-xl">
        <figure>
          <img className="w-36 h-56 m-5 rounded-xl" src={picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {Product_Name}</h2>

          <div className="md:flex justify-around">
            {Brand === "Apple" ? (
              <p>
                Seller: {seller_name}
                <small className="text-info">Verified Seller</small>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="checkbox checkbox-sm"
                />
              </p>
            ) : (
              <p>Seller: {seller_name}</p>
            )}
            <p>Location: {location}</p>
          </div>

          <div className="md:flex justify-around">
            <p className="text-accent-focus">
              Original_Price: {original_price}
            </p>
            <p className="text-accent-focus">Resale_Price: {resale_price}</p>
          </div>
          <p>Use_Time: {years_of_use}</p>
          <p>Release_Time: {posted_time}</p>

          <div className="card-actions justify-end">
            <button className="normal-case btn btn-xs btn-primary">
              Book Now
            </button>
            <label className="normal-case btn btn-xs btn-accent">Report</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
