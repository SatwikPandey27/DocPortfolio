import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <div className='border-3 border-top border-danger-subtle'>
      <footer className="site-footer section-padding" id="contact">
        <div className="container containerfooter">
          <div className="row">

            <div className="me-5 col-lg-4">
              <h5 className="mb-lg-4 mb-3">Working Hours</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">
                  Sunday : Closed
                </li>

                <li className="list-group-item d-flex">
                  Monday, Tuesday - Friday
                  <span>8:00 AM - 3:30 PM</span>
                </li>

                <li className="list-group-item d-flex">
                  Saturday
                  <span>10:30 AM - 5:30 PM</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12 my-4 my-lg-0 ms-3">
              <h5 className="mb-lg-4 mb-3">My Clinic</h5>
              <p>
                <b>Satyak Healthcare Clinic</b><br />
                93 A, MaaShakti Apartments, Paschim Vihar, New Delhi, Delhi 110063
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 ms-auto">
              <h5 className="mb-lg-4 mb-3">Socials</h5>

              <ul className="social-icon">
                <li><a href="https://www.facebook.com/satyakhealthcareclinic/" className="social-icon-link bi-facebook"> </a></li>
                <li><a href="https://www.linkedin.com/company/drnikhiljain" className="social-icon-link bi-linkedin"> </a></li>
                <li><a href="https://www.instagram.com/satyakhealthcareclinic/" className="social-icon-link bi-instagram"> </a></li>
                <li><a href="https://www.youtube.com/@Dr.NikhilJain" className="social-icon-link bi-youtube"> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}