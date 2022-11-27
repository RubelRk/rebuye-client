import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import img from "../../assets/image/rebuy phone logo transparent.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar  bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-base-100 btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="text-base-100 menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            <li className="m-2">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="m-2">
              <Link to="/allProduct">All Product</Link>
            </li>
            <li className="m-2">
              <Link to="/dashBoard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <img
          alt=""
          src={img}
          width="80"
          height="50"
          className="lg:ml-12 align-top"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-base-100 menu menu-horizontal p-0">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="m-2">
            <Link to="/allProduct">All Product</Link>
          </li>
          <li className="m-2">
            <Link to="/dashBoard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="lg:mr-12 text-base-100 navbar-end">
        {user ? (
          <Link
            onClick={handleSignOut}
            className="normal-case btn btn-ghost"
            to="/register"
          >
            SignOut
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="text-base-100 btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
