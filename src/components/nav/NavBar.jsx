import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
 
const NavBar = () => {
  return (
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/test1">
              Test 1
            </Link>
          </li>
        </ul>
      </nav>
  );
};
 
export default NavBar;