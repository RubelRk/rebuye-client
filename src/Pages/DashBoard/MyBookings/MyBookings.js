import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const { data: myBookings = [] } = useQuery({
    queryKey: ["ProductBooking", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/ProductBooking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="my-3 text-3xl font-semibold">
        <u>My Orders</u>
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {myBookings &&
              myBookings?.map((bookings) => (
                <tr key={bookings?._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask  w-20 h-20">
                          <img src={bookings?.picture} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{bookings?.Product_Name}</td>
                  <td>${bookings?.resale_price}</td>
                  <th>
                    {bookings?.resale_price && !bookings?.paid && (
                      <Link to={`/dashBoard/payment/${bookings._id}`}>
                        <button className="btn btn-accent btn-xs">Pay</button>
                      </Link>
                    )}
                    {bookings?.resale_price && bookings?.paid && (
                      <span className="text-primary">Paid</span>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
