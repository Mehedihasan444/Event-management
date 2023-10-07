import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import PrivateRoute from "./PrivateRoute";
import ServiceDetailsServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Resister",
        element: <Resister></Resister>,
      },
      {
        path:"/ServiceDetails/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      }
    ],
  },
]);

export default Routes;
