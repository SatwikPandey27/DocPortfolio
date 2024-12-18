import React from "react";
import "./navbar.css";
import logo from "../../assets/logo2.png";

export default function Navbar() {
  return (
    <>
      {/* New Row for Contact Details */}
      <div className="top-bar fixed-top">
        <div className="mx-lg-2 mx-md-1 d-flex justify-content-between align-items-center">
          <div className="col pe-sm-3">
            <span>
              <a href="tel:+91 88105 60977" className="nodec">
                📞 +91 88105 60977
              </a>{" "}
              |
            </span>
            {/* <span>🕒 Timings: 10:30 AM - 2:00 PM & 6:00 PM - 9:00 PM | Sun 10:00 AM - 2:00 PM</span> */}
            <span className="d-none d-md-inline">
              🕒 Timings: 10:30AM - 2:00PM & 6:00PM - 9:00PM | Sun 10AM - 2PM
            </span>
            <span className="d-inline d-md-none">
              <br />
              10:30AM - 2PM & 6 PM - 9PM <br /> Sun 10AM - 2PM
            </span>
          </div>
          <div className="col ms-sm-3">
            <a
              className="nodec address"
              href="https://www.google.com/maps?q=124-A,+MaaShakti+Apartments,+A1+Block,+Paschim+Vihar,+New+Delhi-110063"
            >
              <span className="d-none d-lg-inline">
                🏥 Address: 124-A, MaaShakti Apartments, A1 Block, Paschim
                Vihar, New Delhi-110063
              </span>
              <span className="d-inline d-lg-none">
                🏥: 124-A, MaaShakti Apartments, A1 Block, Paschim Vihar,
                Delhi-63
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Existing Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top shadow-lg h-20 border-1 border-bottom border-danger-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo-size" src={logo} alt="logo" />
            Satyak Healthcare Clinic
          </a>
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
            <ul className="navbar-nav ms-auto menu">
              {" "}
              {/* Use ms-auto class to align right */}
              <li className="nav-item active">
                <a className="nav-link fs-5" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link fs-5" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-5"
                  href="#treatment"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Conditions Treated
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#treatment">
                      Mental Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#treatment">
                      Women’s Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#treatment">
                      Geriatric Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Ghealth">
                      General Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#Spine">
                      Spine Conditions
                    </a>
                  </li>
                </ul>
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
              {/* <li className="nav-item">
                <a className="nav-link fs-5" href="/blog">Blogs</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link fs-5" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item me-0">
                <a className="nav-link fs-5" href="/gallery">
                  Gallery
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link fs-5" href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
