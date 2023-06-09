import { useContext } from "react";
import logo from "../../../../../public/smash-logo-white-ok.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  };

  const navItems = (
    <>
      <li>
        <NavLink className="p-3" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="p-3" to={"instructor"}>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink className="p-3" to={"classes"}>
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink className="p-3" to={"dashboard"}>
          Dashboard
        </NavLink>
      </li>
      
    </>
  );

  return (
    <div className="navbar bg-black px-10 text-white uppercase font-bold">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="">
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{navItems}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
        <>
          <p className="lowercase">{user.email}</p>
          <button onClick={handleLogOut}>Sign Out</button>
        </>
      ) : (
        <>
          <Link
          to={"/logIn"}
          className="btn btn-sm bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-0"
        >
          Log in
        </Link>
        </>
      )}
      </div>
    </div>
  );
};

export default Navbar;
