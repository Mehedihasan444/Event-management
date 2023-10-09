import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li className="ml-5">
        <NavLink to="/" >Home</NavLink>
      </li>
      <li className="ml-5">
        <NavLink to="/BlogsPage">Blogs</NavLink>
      </li>
      <li className="ml-5">
        <NavLink to="/About">About Us</NavLink>
      </li>
      {/* <li className="ml-5"><NavLink to="/About">Contact Us</NavLink></li> */}
      {/* <li className="ml-5"><NavLink to="/Events">Events</NavLink></li> */}
    </>
  );
  // className='focus:bg-gradient-to-r from-[#ffa628] to-[#fe4504]'
  return (
    <div className="shadow-lg">
      <div className="navbar bg-base-100 py-5  w-[95vw] lg:w-[99vw] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
         
            <a className="btn btn-ghost normal-case  text-xl hidden lg:block">
            HARMONI
            </a>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <span className="">{user.displayName}</span>
              <img src={user.photoURL} alt="" className="rounded-full w-10" />
              <Link
                onClick={() => LogOut()}
                className="btn bg-gradient-to-r text-white from-[#ffa628] shadow-xl to-[#fe4504]"
              >
                LogOut
              </Link>
            </div>
          ) : (
            <Link
              to="/Login"
              className="btn bg-gradient-to-r from-[#ffa628] shadow-xl to-[#fe4504] text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
