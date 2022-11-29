import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllSeller = () => {
  useTitle("AllSeller");
  const { data: Sellers = [], refetch } = useQuery({
    queryKey: ["users/Buyer"],
    queryFn: async () => {
      const res = await fetch(
        `https://rebuy-phone-server.vercel.app/users/Seller`,
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

  const handleVerify = (id) => {
    fetch(`https://rebuy-phone-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verify Successful");
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`https://rebuy-phone-server.vercel.app/users/${id}`, {
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
  return (
    <div>
      <h2>All Seller: {Sellers.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Sellers.map((Seller) => (
              <tr key={Seller._id}>
                <td>{Seller?.name}</td>
                <td>{Seller?.email}</td>
                <td>
                  {Seller?.userInfo !== "verified" ? (
                    <button
                      onClick={() => handleVerify(Seller?._id)}
                      className="btn btn-xs"
                    >
                      Verify
                    </button>
                  ) : (
                    "verified"
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(Seller?._id)}
                    className="btn btn-ghost btn-xs"
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

export default AllSeller;
