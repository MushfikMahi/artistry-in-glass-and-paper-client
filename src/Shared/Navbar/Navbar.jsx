import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
  };
    const links = (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allcrafts"}>All Art & craft Items</NavLink>
          </li>
          <li>
            <NavLink to={"/updateCraft"}>Update Craft</NavLink>
          </li>
          {
            user && 
            <>
            <li>
            <NavLink to={"/addcraft"}>Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to={"/mycrafts"}>My Art&Craft List</NavLink>
          </li>
          </>
          }
        </>
      );
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-60 text-white">
  <Helmet>
    <title>Artistry - Home</title>
  </Helmet>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {links}
      </ul>
    </div>
    <Link to={"/"} className="btn btn-ghost text-xl">
    Artistry in Glass & Paper
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{links}</ul>
  </div>
  <div className="navbar-end">
  {user ? (
    <div className="flex items-center gap-5">
      {" "}
      <button
        onClick={handleLogOut}
        className="btn bg-green-500 text-white border-none"
      >
        Log Out
      </button>{" "}
      <div className="w-10 rounded-full">
        <Link to={"/profile"}>
          <img title={user.displayName} alt="user" src={user.photoURL} />
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-5">
      <Link
      to={"/login"}
      className="btn bg-green-500 text-white border-none"
    >
      Log In
    </Link>
    <Link
      to={"/register"}
      className="btn bg-green-500 text-white border-none"
    >
      Register
    </Link>
    </div>
  )}
</div>
</div>
    );
};

export default Navbar;