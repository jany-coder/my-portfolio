import React from "react";
import avatar from "../img/Profile.jpg";
import { NavLink } from "react-router-dom";

function Navbar({ sidebarOff }) {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active" onClick={sidebarOff}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              exact
              activeClassName="active"
              onClick={sidebarOff}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              exact
              activeClassName="active"
              onClick={sidebarOff}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              exact
              activeClassName="active"
              onClick={sidebarOff}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/resume"
              exact
              activeClassName="active"
              onClick={sidebarOff}
            >
              Resume
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>Let's Talk!</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
