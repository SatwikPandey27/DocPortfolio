import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="site-footer section-padding border-3 border-top border-danger-subtle" id="footer">
        <div className="container containerfooter">
          <div className="row">

            <div className="me-5 col-lg-4">
              <h5 className="mb-lg-4 mb-3">Working Hours</h5>

              <ul className="list-group list-group-flush">
                
                <li className="list-group-item d-flex">
                  Monday - Saturday 
                  <span>10:30 AM - 2:00 PM <br /> and <br/> 6:00 PM - 9:00 PM</span>
                </li>

                <li className="list-group-item d-flex">
                  Sunday
                  <span>11:00 AM to 1:00 PM</span>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12 my-4 my-lg-0 ms-3">
              <h5 className="mb-lg-4 mb-3">My Clinic</h5>
              <p>
                <b>Satyak Healthcare Clinic</b><br />
                124,A MaaShakti Apartments, A1 Block, Paschim Vihar, New Delhi, Delhi 110063
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 ms-auto">
              <h5 className="mb-lg-4 mb-3">Socials</h5>

              <ul className="social-icon">
                <li><a href="https://www.facebook.com/satyakhealthcareclinic/" className="social-icon-link bi-facebook"> </a></li>
                <li><a href="https://www.instagram.com/satyakhealthcareclinic/" className="social-icon-link bi-instagram"> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
