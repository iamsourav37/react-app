import React from "react";

import { NavLink } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="container bg-dark text-light mt-5">
        <h2>Services page</h2>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink exact to="/services/design">
                Website Design
              </NavLink>
            </li>

            <li className="breadcrumb-item">
              <NavLink to="/services/development">Website Development</NavLink>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Services;
