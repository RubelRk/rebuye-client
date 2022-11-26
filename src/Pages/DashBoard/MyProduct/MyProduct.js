import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: myProducts = [] } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/myProduct?email=${user?.email}`,
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
        <u>My Product</u>
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map((myProduct, id) => (
              <tr key={id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask  w-20 h-20">
                        <img src={myProduct?.picture} alt="" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{myProduct?.Product_Name}</td>
                <td>{myProduct?.resale_price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
