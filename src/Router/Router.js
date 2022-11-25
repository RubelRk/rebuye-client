import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import DashBoard from "../Pages/DashBoard/DashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import ProductCategoriesDetails from "../Pages/Home/ProductCategories /ProductCategoriesDetails";
import Login from "../Pages/Login/Login";
import ProductBooking from "../Pages/ProductBooking/ProductBooking";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allProduct",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/ProductCategoriesDetails/:Product_Id",
        element: (
          <PrivateRoute>
            <ProductCategoriesDetails></ProductCategoriesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:4000/ProductCategoriesDetails/${params.Product_Id}`
          ),
      },
      {
        path: "/ProductBooking/:id",
        element: (
          <PrivateRoute>
            <ProductBooking></ProductBooking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/ProductBooking/${params.id}`),
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashBoard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashBoard/allUser/:role",
        element: <AllUser></AllUser>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/users/${params.role}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
