import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Foods from "../Pages/Foods/Foods";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import FarmerLogin from "../Pages/Auth/Login/FarmerLogin";
import AdminLogin from "../Pages/Auth/Login/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import NotFound from "../Pages/Others/NotFound/NotFound";
import AllUser from "../Pages/Dashboad/Admin/AllUser";
import OrderHistory from "../Pages/Dashboad/Admin/OrderHistory";
import AddProduct from "../Pages/Dashboad/Farmer/AddProduct";
import MyProduct from "../Pages/Dashboad/Farmer/MyProduct";
import MyCart from "../Pages/Dashboad/User/MyCart";
import PurchaseHistory from "../Pages/Dashboad/User/PurchaseHistory";
import FarmerRegister from "../Pages/Auth/Register/FarmerRegister";

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
          path: 'foods',
          element: <Foods></Foods>,
          loader: () =>  fetch("http://localhost:5000/foods"),
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'farmer-login',
          element: <FarmerLogin></FarmerLogin>,
        },
        {
          path: 'admin-login',
          element: <AdminLogin></AdminLogin>,
        },
        {
            path: 'register',
            element: <Register></Register>,
          },
        {
            path: 'becomeSeller',
            element: <FarmerRegister></FarmerRegister>,
          },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "allUser",
          element:  <PrivateRoute><AllUser></AllUser></PrivateRoute>,
          loader: () =>  fetch("http://localhost:5000/users"),
        },
        {
          path: 'orderHistory',
          element: <PrivateRoute><OrderHistory></OrderHistory></PrivateRoute>,
          loader: () =>  fetch("http://localhost:5000/orderHistory"),
        },
        {
          path: 'addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        {
          path: 'myProduct/:email',
          element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>,
          loader: ({params}) =>  fetch(`http://localhost:5000/foods/my-foods/${params.email}`),
        },
        {
          path: 'myCart/:email',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: ({params}) =>  fetch(`http://localhost:5000/MyCart/${params.email}`),
        },
        {
          path: 'purchaseHistory/:email',
          element: <PrivateRoute><PurchaseHistory></PurchaseHistory></PrivateRoute>,
          loader: ({params}) =>  fetch(`http://localhost:5000/MyPurchaseHistory/${params.email}`),
        },
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);