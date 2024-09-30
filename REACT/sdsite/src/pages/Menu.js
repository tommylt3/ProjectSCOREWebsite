import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      <header className="header">
        <h1>SCORE: Student Code Online Review and Evaluation</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/projectdetails"}>Project Details</Link>
          </li>
          <li>
            <Link to={"/aboutus"}> About Us</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Menu;
