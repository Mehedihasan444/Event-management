
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const LeftSideMenu = () => {
  const { images } = useContext(AuthContext);
  return (
    <div className=" bg-white rounded-md py-5 px-10 h-[65vh] shadow-md">
      <h1 className="text-3xl font-semibold mb-5 ">All Categories</h1>
      <hr />
      <div className="space-y-5 flex-col navbar  navbar-center">
        <ul className="menu space-y-5 menu-vertical">
          {images.map((image) => (
            <li className="w-full"key={image.idx}><NavLink to="/"  className="">{image.category}</NavLink></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideMenu;
