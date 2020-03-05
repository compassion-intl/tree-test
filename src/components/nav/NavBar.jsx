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
            <Link className="nav-link" to="/task1">
              Task 1
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/task2">
              Task 2
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/task3">
              Task 3
            </Link>
          </li>
        </ul>
      </nav>
  );
};
 
export default NavBar;