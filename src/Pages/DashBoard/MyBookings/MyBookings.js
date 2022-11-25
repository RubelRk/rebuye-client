import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
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
            "content-type": "application/json",
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
        <u>My Booking</u>
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
            {myBookings.map((bookings, id) => (
              <tr key={id}>
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
                <td>{bookings?.resale_price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">pay</button>
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
