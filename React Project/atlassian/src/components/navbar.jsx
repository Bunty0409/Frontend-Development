import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light py-3">
      <div className="container-fluid">
        <Link to="/main.jsx" className="navbar-brand mx-lg-5  d-flex align-items-center">
          <img src="Images/Atlassian-horizontal-blue-rgb.svg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar" // Modified data-bs-target value
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-between " id="collapsibleNavbar">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link to="/product.jsx" className="nav-link">Product<i className="fa fa-angle-down"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/teamPage.jsx" className="nav-link">For teams <i className="fa fa-angle-down"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/supportPage.jsx" className="nav-link">Support <i className="fa fa-angle-down"></i></Link>
            </li>
          </ul>
          <div className="d-flex ">
            <button className="btn btn-primary py-1">Try Now</button>
            <button className="btn btn-light text-wrap">Buy Now</button>
            <button className="border-0 btn-light px-3 border-end"><i className="fa fa-search"></i></button>
            <button className="border-0 btn-light px-3">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
