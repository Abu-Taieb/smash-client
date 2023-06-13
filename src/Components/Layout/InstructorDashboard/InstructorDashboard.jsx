import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../../public/smash-logo-white-ok.png";
import { FaBook, FaBookDead, FaHome } from "react-icons/fa";

const InstructorDashboard = () => {
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
          {/* <div className="text-center">
            <h2 className="text-5xl uppercase my-6 font-bold">
              Welcome to your Dashboard
            </h2>
            <h4 className="text-3xl my-2 font-semibold">If you want to see many details,</h4>
            <h4 className="text-3xl my-2 font-semibold">Please select the menu items.</h4>
          </div> */}
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black text-white font-bold uppercase text-">
            <div className="my-5">
              <Link to={"/"} className="">
                <img className="w-24 mx-auto" src={logo} alt="" />
              </Link>
              <hr className="w-24 mx-auto border-2 border-red-600 my-3" />
            </div>

            <div className="mb-5">
              <h2 className="text-center text-red-600">Instructor Dashboard</h2>
              <hr className="w-44 mx-auto border-1 border-red-600" />
            </div>

            {/* Sidebar content here */}
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructorDashboard/addClass">
                <FaBook></FaBook>
                Add Class <span className="badge">+6</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructorDashboard/myClass">
                <FaBookDead></FaBookDead>
                My Class <span className="badge">+8</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
