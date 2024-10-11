import React from 'react';
import './footer.css'
import logo from '../../assets/logo2.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Footer() {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const location=[28.673950, 77.097592]
  return (
    <div>
      <footer className="site-footer section-padding border-3 border-top border-danger-subtle" id="footer">
        <div className="container containerfooter mx-auto">
          <div className="row mb-lg-5 mb-md-4 mb-sm-2">
            <div className="map-wrap">
              <MapContainer center={location} zoom={25} className='border border-2 border-black'>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location}>
                  <i className="bi bi-geo-alt-fill"></i>
                  <Popup>Come visit this location!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm mx-3 mt-sm-3">
              <h3 className="mb-2">Working Hours</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">
                  Monday - Saturday 
                  <span>10:30 AM - 2:00 PM <br /> and <br/> 6:00 PM - 9:00 PM</span>
                </li>
                <li className="list-group-item d-flex">
                  Sunday
                  <span>10:00 AM to 2:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="col mx-3">
              <img className='logo mb-2' src={logo} alt="logo" />
              <h4 className="mb-2"><a className="nodec" href="https://www.google.com/maps?q=124-A,+MaaShakti+Apartments,+A1+Block,+Paschim+Vihar,+New+Delhi-110063"><b>Satyak Healthcare Clinic</b></a></h4>
              <p className='mt-0 text-justify'>
                We are a dedicated team of doctors with decades of experience, committed to delivering patient-centric care that meets international standards.
              </p>
            </div>

            <div className="col-lg-3 col-sm mx-3">
              <div className="row">
                <h3 className="mb-2">Contact</h3>
                  <ul className="contact">
                    <li>For Dr. Khushboo and Dr. Rajesh : </li>
                    <li><a href="tel:+91 88105 60977" className="nodec"><i className="bi bi-telephone-fill"></i> <b>+91 88105 60977</b></a></li><br />
                    <li><a href="tel:+91 98120 39263" className="nodec"><i className="bi bi-telephone-fill"></i> <b>+91 98120 39263</b></a></li><br />
                    <li>For Dr. Nikhil : </li><br />
                    <li><a href="tel:+91 99106 68831" className="nodec"><i className="bi bi-telephone-fill"></i> <b>+91 99106 68831</b></a></li><br />
                  </ul>
              </div>
              <hr />
              <div className="row">
                <h3 className="mb-2">Socials</h3>
                <ul className="social-icon">
                  <li><a href="https://www.facebook.com/satyakhealthcareclinic/" className="social-icon-link bi-facebook"> </a></li>
                  <li><a href="https://www.instagram.com/satyakhealthcareclinic/" className="social-icon-link bi-instagram"> </a></li>
                  <li><a href="https://www.linkedin.com/company/drnikhiljain" className="social-icon-link bi-linkedin"> </a></li>
                  <li><a href="https://www.youtube.com/@Dr.NikhilJain" className="social-icon-link bi-youtube"> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
