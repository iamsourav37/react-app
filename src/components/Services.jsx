import React from "react";

import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="container bg-dark text-light mt-5">
        <h2>Services page</h2>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/services/design">Website Design</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to="/services/development">Website Development</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to="/">Video Editing</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to="/">Mobile Apps</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Services;
