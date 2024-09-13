import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div id="home">
      <nav className="navbar navbar-expand-lg fixed-top shadow-lg h-20 border-3 border-bottom border-danger-subtle nav">
        <div className="container">

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
            <ul className="navbar-nav mx-auto menu">
              <li className="nav-item active">
                <a className="nav-link fs-5" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <button className="btn dropdown-toggle border-0 fs-5" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </button>
                <ul className="dropdown-menu border border border-dark-subtle border-2">
                  <li className="mx-auto"><a className="dropdown-item mx-auto w-100" href="/drnikhil">Dr. Nikhil Jain</a></li>
                  <li className="mx-auto"><a className="dropdown-item mx-auto w-100" href="/drrajesh">Dr. Rajesh Kansal</a></li>
                  <li className="mx-auto"><a className="dropdown-item mx-auto w-100" href="/dr">Something here</a></li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li> */}
              {/* 
              <li className="nav-item">
                <a className="nav-link" href="#timeline">
                  Timeline
                </a>
              </li> */}

              <li className="nav-item">
                <a className="nav-link fs-5" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
