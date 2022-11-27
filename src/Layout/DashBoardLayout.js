import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useAllSeller from "../hooks/useAllUser";

import Header from "../Pages/Header/Header";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const [isSeller] = useAllSeller(user?.email);

  if (adminLoading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* only Admin View */}
            {isAdmin && (
              <div>
                <li>
                  <Link
                    className="btn btn-info my-5"
                    to="/dashBoard/allUser/Buyer"
                  >
                    All Buyer
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-accent"
                    to="/dashBoard/allUser/Seller"
                  >
                    All Seller
                  </Link>
                </li>
                <li>
                  <Link
                    className="my-5 btn btn-warning"
                    to="/dashBoard/reportItem"
                  >
                    Report Item
                  </Link>
                </li>
              </div>
            )}
            {isAdmin ? (
              ""
            ) : (
              <>
                {isSeller && (
                  <>
                    <li>
                      <Link
                        className="btn btn-info my-5"
                        to="/dashBoard/addProduct"
                      >
                        Add A Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-accent"
                        to="/dashBoard/myProduct"
                      >
                        My Product
                      </Link>
                    </li>
                  </>
                )}
                {isSeller ? (
                  ""
                ) : (
                  <li>
                    <Link className="btn btn-info" to="/dashBoard/myOrder">
                      My Orders
                    </Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
