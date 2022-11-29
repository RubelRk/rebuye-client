import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const ReportItems = () => {
  useTitle("ReportItems");
  const {
    data: reportItem = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportItems/Report%20Item"],
    queryFn: async () => {
      const res = await fetch(
        `https://rebuy-phone-server.vercel.app/reportItems/Report%20Item`,
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
  const handleDeleteUser = (id) => {
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
  if (isLoading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reportItem.map((Item) => (
              <tr key={Item._id}>
                <td>
                  <div className="avatar">
                    <div className="mask  w-20 h-20">
                      <img src={Item?.picture} alt="" />
                    </div>
                  </div>
                </td>
                <td>{Item?.seller_name}</td>
                <td>{Item?.email}</td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(Item?._id)}
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
    </>
  );
};

export default ReportItems;
