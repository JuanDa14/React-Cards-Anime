import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PageNotFound from "../views/PageNotFound";
import ViewDragonBall from "../views/ViewDragonBall";
import ViewNaruto from "../views/ViewNaruto";

function Navbar({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <ul className="nav navbar-nav">
          <li className="nav-item ">
            <Link to="/" className="nav-link text-light">
              Inicio
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/naruto" className="nav-link text-light">
              Naruto Shippuden
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dragonball" className="nav-link text-light">
              Dragon Ball Super
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
