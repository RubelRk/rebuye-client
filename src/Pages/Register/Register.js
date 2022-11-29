import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import useToken from "../../hooks/useToken";

const Register = () => {
  useTitle("Register");
  const { loading, setLoading, createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [emailData, setEmailData] = useState("");
  const [token] = useToken(emailData);
  console.log(token);
  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successful");
        handleUpdateUserProfile(name);
        saveUser(name, email, role);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        setError(`${err.message} Email or Password has wrong Creating.`);
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://rebuy-phone-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmailData(email);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Register Your valid Email address and Password</p>
          <button onClick={handleGoogleSignIn} className="btn btn-secondary">
            Google Sign In
          </button>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">role</span>
              </label>
              <select
                name="role"
                defaultValue="Buyer"
                className="select select-bordered w-full"
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <Link
              to="/login"
              className="text-error label-text-alt link link-hover"
            >
              have an account?
            </Link>

            <div className="form-control mt-6">
              <div className="text-error mb-4">{error}</div>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
