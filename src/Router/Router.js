
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import ProductCategoriesDetails from "../Pages/Home/ProductCategories /ProductCategoriesDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";




export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allProduct',
                element:<AllProduct></AllProduct>,
                loader:()=>fetch('http://localhost:4000/AllProduct')
            },{
                path:'/ProductCategoriesDetails/:Product_Id',
                element:<PrivateRoute><ProductCategoriesDetails></ProductCategoriesDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:4000/ProductCategoriesDetails/${params.Product_Id}`)
            }
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }

])
