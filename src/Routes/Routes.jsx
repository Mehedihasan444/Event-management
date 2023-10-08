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
import Error from "../Components/Error/Error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
     errorElement:<Error></Error>
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/BlogsPage",
        element: <BlogsPage></BlogsPage>,
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
