import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;
  useTitle("Add Product");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_img_key;

  //handle add Product

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            Product_Name: data.Product_Name,
            seller_name: data.displayName,
            picture: imgData.data.url,
            original_price: data.original_price,
            resale_price: data.resale_price,
            posted_time: data.posted_time,
            years_of_use: data.years_of_use,
            phoneNumber: data.phoneNumber,
            location: data.location,
            email: data.email,
            Brand: data.Brand,
          };
          //upto all data inside all product

          fetch("http://localhost:4000/AllProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success("Review Placed Successfully");
                navigate("/dashBoard/myProduct");
              }
            })
            .catch((err) => console.error(err));

          console.log(product);
        }
      });
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Will You Sell Phone!</h1>
        <p className="py-2">
          Please Adding Your Phone Detail And <br /> Your Information.
        </p>
      </div>
      <div className="h-[1050px] flex  justify-center">
        <form
          className="shadow-2xl bg-base-100 p-8"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("Product_Name", { required: true })}
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
            />
            <p>
              {errors.Product_Name && (
                <span> {errors.Product_Name.message}</span>
              )}
            </p>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              defaultValue={displayName}
              readOnly
              type="text"
              {...register("seller_name", { required: true })}
              placeholder="seller_name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("original_price", { required: true })}
              placeholder="Original Price"
              className="input input-bordered w-full max-w-xs"
            />
            <p>
              {errors.original_price && (
                <span> {errors.original_price.message}</span>
              )}
            </p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resale_price", { required: true })}
              placeholder="Resale Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Posted Time</span>
            </label>
            <input
              type="text"
              {...register("posted_time", { required: true })}
              placeholder="Posted Time"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Years Of Use</span>
            </label>
            <input
              type="text"
              {...register("years_of_use", { required: true })}
              placeholder="Years Of Use"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Location"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Picture</span>
            </label>
            <input
              type="file"
              {...register("picture", { required: true })}
              placeholder="Product Picture"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("Brand", { required: true })}
            >
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Xioami">Xioami</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={email}
              readOnly
              type="email"
              {...register("email", { required: true })}
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            value="Add Product"
            className="mt-8 btn btn-primary w-full "
            type="submit"
          />
        </form>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default AddProduct;
