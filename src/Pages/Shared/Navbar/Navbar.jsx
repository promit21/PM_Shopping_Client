import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    logOutUser().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">All Products</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 lg:px-10">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl font-bold">
            PM<span className="lg:text-3xl text-yellow-500">S</span>hopping
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5">
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  className="h-10 rounded-full"
                  src={user.photoURL}
                  alt="Photo"
                />
              ) : (
                <img
                  className="rounded-full h-10"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Photo"
                />
              )}
            </div>

            <div>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn text-yellow-400 bg-slate-700"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/logIn">
                  <button className="btn text-yellow-500 bg-slate-700">
                    Log in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
