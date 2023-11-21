import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/table" className="navbar-link">
              Table
            </Link>
          </li>
          <li>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
