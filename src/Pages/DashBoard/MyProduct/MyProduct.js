import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const MyProduct = () => {
  useTitle("MyProduct");
  const { user } = useContext(AuthContext);
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://rebuy-phone-server.vercel.app/myProduct?email=${user?.email}`,
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
  //Delete product
  const handleDeleteProduct = (id) => {
    fetch(`https://rebuy-phone-server.vercel.app/AllProduct/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successful");
          refetch();
        }
      });
  };

  //update Advertised info

  const handleAdvertised = (id) => {
    fetch(`https://rebuy-phone-server.vercel.app/AllProduct/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Advertised Successful");
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="my-3 text-3xl font-semibold">
        <u>My Product</u>
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <td>Advertised</td>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map((myProduct, id) => (
              <tr key={myProduct._id}>
                <td>{id + 1}</td>
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
                <td>Available/sold</td>
                <td>
                  {myProduct?.productInfo !== "Advertised" ? (
                    <button
                      onClick={() => handleAdvertised(myProduct._id)}
                      className="btn btn-xs btn-accent"
                    >
                      ON Add
                    </button>
                  ) : (
                    "Advertised"
                  )}
                </td>

                <th>
                  <button
                    onClick={() => handleDeleteProduct(myProduct._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default MyProduct;
