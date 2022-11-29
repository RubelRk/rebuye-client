import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

import AdvertisedItems from "./AdvertisedItems/AdvertisedItems";
import Banner from "./Banner/Banner";
import ProductCategories from "./ProductCategories /ProductCategories ";

const Home = () => {
  const { loading } = useContext(AuthContext);
  useTitle("Home");

  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      <AdvertisedItems></AdvertisedItems>
    </div>
  );
};

export default Home;
