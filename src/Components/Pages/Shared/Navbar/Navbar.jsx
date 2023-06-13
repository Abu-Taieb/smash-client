/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import logo from "../../../../../public/smash-logo-white-ok.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart, setCart } = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch('http://localhost:5000/addClass?email=taieb01945@gmail.com')
    .then(res => res.json())
    .then(data => setCart(data))
}, [])

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="">
        <Link className="p-3" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="p-3" to="instructor">
          Instructors
        </Link>
      </li>
      <li>
        <Link className="p-3" to="classes">
          Classes
        </Link>
      </li>
      <li>
        <Link className="p-3" to="dashboard">
          <button className="gap-2 flex items-center px-2 py-1 rounded text-white uppercase">
            Student Dashboard
            <span className="badge badge-white">
              <FaShoppingCart></FaShoppingCart> + {cart?.length || 0}
            </span>
          </button>
        </Link>
      </li>
      <li>
        <Link className="p-3" to="instructorDashboard">
          Instructor Dashboard
        </Link>
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="">
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 items-center ">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="avatar tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>

            <button
              className="btn btn-sm bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-0 mx-2"
              onClick={handleLogOut}
            >
              Log Out
            </button>
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
