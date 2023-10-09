import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <PrivateRoute><About></About></PrivateRoute>,
        loader:()=>fetch('/TeamMembersData.json')
      },
      {
        path: "/BlogsPage",
        element: <PrivateRoute><BlogsPage></BlogsPage></PrivateRoute>,
        loader:()=>fetch('/BlogsData.json')
      },
      {
        path: "/BlogDetails/:id",
        element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute> ,
        loader:()=>fetch('/BlogsData.json')

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
