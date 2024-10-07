import React from 'react'
import 'leaflet/dist/leaflet.css';
// import emailjs from '@emailjs/browser'
// import Phone from '../../assets/contact.png'
import './contact.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Contact() {
  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const location=[28.673950, 77.097592]

  return (
    <div className='container'>
      <p>We are committed to providing compassionate and personalized care for all our patients. Whether you're looking to schedule an appointment, have a medical inquiry, or need advice, we are here to help. You can reach us through the following methods:</p>
      <div className="contact-page row">
        <div className='col text-center py-2 mx-2'>
          <p>To get in touch directly, contact us on the number below :</p>
          <p>For Dr. Khushboo and Dr. Rajesh : </p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 88105 60977</b></p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 98120 39263</b></p>
          <p>For Dr. Nikhil : </p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 9910668831</b></p>
        </div>
        <div className="col py-2">
          <p className='mb-1'>For in-person consultations or treatments, you are welcome to visit our clinic during working hours.</p>
          <p className='mb-0'><b>124-A, Maa Shakti Apartment A1 BLOCK Paschim Vihar
          New Delhi, Delhi-110063 :</b></p>
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
      </div>
    </div>
  )
}
