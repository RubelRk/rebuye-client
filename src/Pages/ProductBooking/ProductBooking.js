import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ProductBooking = ({ productBooked, setProductBooked }) => {
  const { Product_Name, resale_price, seller_name } = productBooked;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const Product_Name = form.Product_Name.value;
    const email = form.email.value;
    const resale_price = form.resale_price.value;
    const seller_name = form.seller_name.value;
    const location = form.location.value;
    const phoneNumber = form.phone.value;

    const booking = {
      Product_Name,
      email,
      resale_price,
      seller_name,
      location,
      phoneNumber,
    };

    fetch("http://localhost:4000/ProductBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Success");
        }
      }); //then er ses
    setProductBooked(null);
  }; //handler er ses

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Confirm Booked!</h3>
          <form
            onSubmit={handleBooking}
            className="mt-12 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              disabled
              name="Product_Name"
              value={Product_Name}
              className="input w-full input-bordered"
            />
            <input
              disabled
              type="text"
              name="seller_name"
              value={seller_name}
              className="input w-full input-bordered"
            />
            <input
              disabled
              type="text"
              name="resale_price"
              value={resale_price}
              className="input w-full input-bordered"
            />
            <input
              required
              type="number"
              name="phone"
              placeholder="your Phone Number"
              className="input input-bordered w-full"
            />
            <input
              disabled
              type="text"
              name="email"
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              required
              name="location"
              placeholder="Your Location"
              className="input input-bordered w-full"
            />
            <button className="btn btn-active btn-accent">Submit</button>
          </form>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductBooking;
