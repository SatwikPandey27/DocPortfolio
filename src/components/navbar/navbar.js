import React from "react";
import "./navbar.css";
import logo from '../../assets/logo2.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg h-20 border-1 border-bottom border-danger-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className='logo-size' src={logo} alt="logo" />Satyak Healthcare Clinic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto menu"> {/* Use ms-auto class to align right */}
            <li className="nav-item active">
              <a className="nav-link fs-5" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link fs-5" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
