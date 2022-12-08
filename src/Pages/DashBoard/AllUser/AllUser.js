import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllUser = () => {
  useTitle("AllUser");
  //load all Buyer data

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

  //Verify Buyer data

  const handleVerify = (id) => {
    fetch(`${process.env.REACT_APP_API}/users/admin/${id}`, {
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

  //Delete Buyer Data
  const handleDeleteUser = (id) => {
    fetch(`${process.env.REACT_APP_API}/users/${id}`, {
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
  if (isLoading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <div>
      <h2>All Buyer: {buyers.length}</h2>
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
            {buyers.map((buyer) => (
              <tr key={buyer._id}>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                <td>
                  {buyer?.userInfo !== "verified" ? (
                    <button
                      onClick={() => handleVerify(buyer?._id)}
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
                    onClick={() => handleDeleteUser(buyer?._id)}
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

export default AllUser;
