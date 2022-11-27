import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const AddProduct = () => {
  const navigate = useNavigate();
  useTitle("Add Product");
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const Product_Name = form.Product_Name.value;
    const picture = form.picture.value;
    const original_price = form.original_price.value;
    const resale_price = form.resale_price.value;
    const posted_time = form.posted_time.value;
    const years_of_use = form.years_of_use.value;
    const phoneNumber = form.phoneNumber.value;
    const location = form.location.value;

    const Brand = form.Brand.value;

    const orders = {
      Product_Name,
      seller_name: displayName,
      picture,
      original_price,
      resale_price,
      posted_time,
      years_of_use,
      phoneNumber,
      location,
      email,
      Brand,
    };
    if (!picture) {
      toast.error("Places Input One Image");
    } else {
      fetch("http://localhost:4000/AllProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Review Placed Successfully");
            form.reset();
            navigate("/dashBoard/myProduct");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:w-1/2 ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Will You Sell Phone!</h1>
          <p className="py-2">
            Please Adding Your Phone Detail And <br /> Your Information.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                required
                type="text"
                name="Product_Name"
                placeholder="Product Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                defaultValue={displayName}
                disabled
                type="text"
                name="seller_name"
                placeholder="Seller Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Phone Picture</span>
              </label>
              <input
                required
                type="picture"
                name="picture"
                placeholder="Picture"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                required
                type="text"
                name="original_price"
                placeholder="Original Price"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                required
                type="text"
                name="resale_price"
                placeholder="Resale Price"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Posted Time</span>
              </label>
              <input
                required
                type="text"
                name="posted_time"
                placeholder="Posted Time"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Years Of Use</span>
              </label>
              <input
                required
                type="text"
                name="years_of_use"
                placeholder="Years Of Use"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                required
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                required
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={email}
                disabled
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Brand</span>
              </label>
              <select
                required
                name="Brand"
                defaultValue="Apple"
                className="select select-bordered w-full"
              >
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xioami">Xioami</option>
              </select>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
