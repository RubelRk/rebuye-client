import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
import AddProduct from "../Pages/DashBoard/MyProduct/AddProduct";
import MyProduct from "../Pages/DashBoard/MyProduct/MyProduct";
import ReportItems from "../Pages/DashBoard/ReportItems/ReportItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import ProductCategoriesDetails from "../Pages/Home/ProductCategories /ProductCategoriesDetails";
import Login from "../Pages/Login/Login";
import ProductBooking from "../Pages/ProductBooking/ProductBooking";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
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
        path: "/allProduct/:Brand",
        element: (
          <PrivateRoute>
            <ProductCategoriesDetails></ProductCategoriesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/AllProduct/${params.Brand}`),
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
        path: "/dashBoard/myOrder",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/dashBoard/allUser/Buyer",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashBoard/allUser/Seller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashBoard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashBoard/myProduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashBoard/reportItem",
        element: (
          <AdminRoute>
            <ReportItems></ReportItems>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
