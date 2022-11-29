import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedItemsDetails from "./AdvertisedItemsDetails";

const AdvertisedItems = () => {
  const { data: Advertised = [], isLoading } = useQuery({
    queryKey: ["aProduct/Advertised"],
    queryFn: async () => {
      const res = await fetch(
        "https://rebuy-phone-server.vercel.app/aProduct/Advertised",
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
  if (isLoading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  return (
    <>
      {Advertised?.length ? (
        <div>
          <h3 className="text-center my-10 text-4xl">Advertisement </h3>
          <hr className="w-48 mx-auto" />
          {Advertised.map((add) => (
            <AdvertisedItemsDetails
              key={add._id}
              add={add}
            ></AdvertisedItemsDetails>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdvertisedItems;
