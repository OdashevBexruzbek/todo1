import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Home, About, Contact } from "../pages";

function Navbar() {
  return (
    <div className="bg-base-300 mb-3">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn bg-success font-bold text-2xl" to="/">
            TodoApp
          </Link>
        </div>
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
    </div>
  );
}

export default Navbar;
