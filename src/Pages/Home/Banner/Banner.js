import React from "react";
import img from "../../../assets/image/img2.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={img}
          className="min-w-sm rounded-lg lg:w-2/4 shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-300">
            Refurbished Phone!
          </h1>
          <h1 className="pt-4 text-xl font-semibold  text-gray-300">
            Certified Refurbished
          </h1>
          <p className="py-4  text-gray-300">
            Discover what goes into each refurbished Phone.
          </p>

          {/* modal use */}

          <label
            htmlFor="my-modal-3"
            className="normal-case btn btn-outline btn-info"
          >
            Learn more
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <p className="py-4">
                The main difference between "refurbished" and "used" products is
                that refurbished products have been tested and verified to
                function properly, and are thus free of defects, while "used"
                products may or may not be defective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
