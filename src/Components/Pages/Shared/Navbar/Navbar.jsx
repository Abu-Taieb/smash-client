import logo from '../../../../../public/smash-logo-white-ok.png'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-black px-10 text-white font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'instructor'}>Instructors</NavLink>
        <NavLink to={'/classes'}>Classes</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </ul>
    </div>
    <Link to={'/'} className=""><img className='w-24' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'instructor'}>Instructors</NavLink>
      <NavLink to={'/classes'}>Classes</NavLink>
      <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/logIn'} className="btn">Log in</Link>
  </div>
</div>
    );
};

export default Navbar;