import React from "react";
import "./navbar.css";
import logo from '../../assets/logo2.png';

export default function NavbarDet() {
  return (
    <>
      {/* New Row for Contact Details */}
      <div className="top-bar fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <span> <a href="tel:+91 88105 60977" className="nodec">📞 +91 88105 60977</a> |</span>
            <span>🕒 Timings: 10:30 AM - 2:00 PM & 6:00 PM - 9:00 PM | Sat 10:00 AM - 2:00 PM</span>
          </div>
          <div>
            <span>🏥 Address: 124-A, MaaShakti Apartments, A1 Block, Paschim Vihar, New Delhi-110063</span>
          </div>
        </div>
      </div>

      {/* Existing Navbar */}
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
                <a className="nav-link fs-5 back" href="/"><i class="bi bi-caret-left"></i>Back Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
