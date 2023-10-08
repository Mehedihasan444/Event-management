import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user}=useContext(AuthContext)
    if (user) {
        return children;
    }
    return  <Navigate state={location.pathname}to='/Login'></Navigate>
  
};

export default PrivateRoute;