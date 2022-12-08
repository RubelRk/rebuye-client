import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ProductBooking from "../../ProductBooking/ProductBooking";

const ProductCategoriesDetails = () => {
  useTitle("ProductCategoriesDetails");
  const productDetails = useLoaderData({});

  const [productBooked, setProductBooked] = useState();
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users/Buyer"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/users/Buyer`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(buyers);

  const handleReportItem = (id) => {
    fetch(`${process.env.REACT_APP_API}/reportProduct/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Report Successful");
          refetch();
        }
      });
  };
  if (isLoading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="lg:w-1/2 mx-auto text-2xl my-5">
        <p className="ml-5">
          <strong className="mr-2">Brand:</strong> {productDetails[0].Brand}
        </p>
      </h3>

      {productDetails.map((productDetail) => (
        <section key={productDetail?._id} setProductBooked={setProductBooked}>
          <div className="lg:w-1/2 mx-auto">
            <div className="m-5 card md:card-side bg-base-300 shadow-xl">
              <figure>
                <img
                  className="w-36 h-56 m-5 rounded-xl"
                  src={productDetail?.picture}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Brand: {productDetail?.Product_Name}
                </h2>

                <div className="md:flex justify-around">
                  {productDetail?.userInfo !== "verified" ? (
                    <p>Seller: {productDetail?.seller_name}</p>
                  ) : (
                    <p>
                      Seller: {productDetail?.seller_name}
                      <small className="text-info">Verified Seller</small>
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="checkbox checkbox-sm"
                      />
                    </p>
                  )}

                  <p>Location: {productDetail.location}</p>
                </div>

                <div className="md:flex justify-around">
                  <p className="text-accent-focus">
                    Original_Price:$ {productDetail.original_price}
                  </p>
                  <p className="text-accent-focus">
                    Resale_Price:$ {productDetail.resale_price}
                  </p>
                </div>
                <p>Use_Time: {productDetail.years_of_use}</p>
                <p>Release_Time: {productDetail.posted_time}</p>

                <div className="card-actions justify-end">
                  <label
                    onClick={() => setProductBooked(productDetail)}
                    htmlFor="my-modal-3"
                    className="normal-case btn btn-xs btn-primary"
                  >
                    Book Now
                  </label>
                  {productDetail?.report !== "Report Item" ? (
                    <label
                      onClick={() => handleReportItem(productDetail?._id)}
                      className="normal-case btn btn-xs btn-accent"
                    >
                      Report
                    </label>
                  ) : (
                    <label className="normal-case btn btn-xs btn-error">
                      Reported Item
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Toaster></Toaster>
        </section>
      ))}
      {productBooked && (
        <ProductBooking
          productBooked={productBooked}
          setProductBooked={setProductBooked}
        ></ProductBooking>
      )}
    </div>
  );
};

export default ProductCategoriesDetails;
