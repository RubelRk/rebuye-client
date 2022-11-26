import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: Sellers = [], refetch } = useQuery({
    queryKey: ["users/Buyer"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/users/Seller`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (id) => {
    fetch(`http://localhost:4000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete Successful");
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
      </div>
    </div>
  );
};

export default AllSeller;
