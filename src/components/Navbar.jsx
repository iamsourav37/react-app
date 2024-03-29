import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { GiHook } from "react-icons/gi";

function NavBar() {
  let iconStyles = { color: "white" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand text-warning text-uppercase fs-3 font-weight-bold"
            to="/"
          >
            Learning React
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fs-4">
              <li className="nav-item ">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/"
                >
                  <AiOutlineHome style={iconStyles} /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/todo"
                >
                  <FcTodoList style={iconStyles} /> Todo
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/hooks"
                >
                  <GiHook style={iconStyles} /> Hooks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
