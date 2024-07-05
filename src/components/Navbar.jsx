import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Home, About, Contact } from "../pages";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("You LogOut website");
      })
      .catch((error) => {
        toast.error("Failed to log out")
      });
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className="bg-base-300 mb-3">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn bg-success font-bold text-2xl" to="/">
            TodoApp
          </Link>
        </div>
        <div className="navabr-center">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <NavLink
                className="btn btn-secondary"
                activeClassName="btn-primary"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn btn-secondary"
                activeClassName="btn-primary"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          {user && (
            <div className="flex items-center justify-between mr-3 bg-slate-500  p-2 rounded-3xl cursor-grab">
              {" "}
              <p className="mr-3 font-semibold text-xl text-gray-800 dark:text-gray-300">
                {user.displayName}
              </p>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  {user && <img src={user.photoURL} alt="user profile photo" />}
                </div>
              </div>
              <button onClick={logOut} className="btn btn-secondary ml-20">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
