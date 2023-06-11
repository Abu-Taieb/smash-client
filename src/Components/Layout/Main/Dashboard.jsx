import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../../public/smash-logo-white-ok.png";
import { FaBookReader, FaBookmark, FaDollarSign, FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-red-300 my-10 drawer-button lg:hidden"
          >
            Dashboard Menu
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black text-white font-bold uppercase text-">
            <div className="mb-10 mt-5">
              <Link to={"/"} className="">
                <img className="w-24 mx-auto" src={logo} alt="" />
              </Link>
              <hr className="w-24 mx-auto border-2 border-red-600 my-3" />
            </div>

            {/* Sidebar content here */}
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/selectedClasses">
                <FaBookmark></FaBookmark>
                My Selected Classes <span className="badge">+99</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/enrolledClasses"}>
                <FaBookReader></FaBookReader>
                My Enrolled Classes <span className="badge">+73</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment">
                <FaDollarSign></FaDollarSign>
                Payment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
