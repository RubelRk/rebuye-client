import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import useTitle from "../../../hooks/useTitle";

const stripePromise = loadStripe(
  "pk_test_51M95RmJEH0jKyvaZwcQ4rmM5YLPxnVlyrADcSWnVoXgCh0wD9NTiFclv3vMY0Or7sQAkEYmd6a9PxIkqdxHugdQ700vSd5kYu2"
);

const Payment = () => {
  useTitle("Payment");
  const bookingDataS = useLoaderData();

  const { picture, Product_Name } = bookingDataS;
  return (
    <div>
      <div>
        <h3 className="text-2xl m-8"> Payment For: {Product_Name}</h3>
        <img className="md:h-1/2 w-1/2 m-8" src={picture} alt="" />
      </div>
      <div className="shadow-2xl w-96  m-8 border p-5">
        <h3 className="my-5 text-xl">
          <u>Payment Card</u>
        </h3>
        <Elements stripe={stripePromise}>
          <CheckOut bookingDataS={bookingDataS} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
