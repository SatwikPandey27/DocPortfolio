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
  // const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  // const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const location=[28.673950, 77.097592]

  // const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(serviceId, templateId, form.current, publicKey)
  //     .then(
  //       (result) => {
  //         alert("Thanks for your message! I'll be in touch soon.")
  //         window.location.reload(false)
  //         // console.log('SUCCESS!', result.status, result.text);
  //       },
  //       (error) => {
  //         alert('Failed to send the message, please try again')
  //         // console.error('FAILED...', error);
  //       }
  //     )
  // }
  
  return (
    <div className='container'>
      <p>We are committed to providing compassionate and personalized care for all my patients. Whether you're looking to schedule an appointment, have a medical inquiry, or need advice, we are here to help. You can reach me through the following methods:</p>
      <div className="contact-page row">
        <div className='col text-center py-2 mx-2'>
          <p>For immediate assistance or to get in touch directly, simply contact us on the number below :</p>
          {/* <img className='contactqr mb-3' src={Phone} alt="Qr-Code" /> */}
          {/* <p><i class="bi bi-telephone-fill"></i> <b>+91 99106 68831</b></p> */}
          <p><i class="bi bi-telephone-fill"></i> <b>+91 88105 60977</b></p>
          <p><i class="bi bi-telephone-fill"></i> <b>+91 98120 39263</b></p>
        </div>
        {/* <div className="text-zone col text-center py-2 mx-2">
          <p>
          If you prefer to send a message online, feel free to fill out the form on the right. I’ll review your message and get back to you promptly.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half ">
                  <input className='rounded border border-2' placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    className='rounded border border-2'
                    placeholder="Email"
                    type="email"
                    name="from_email"
                    required
                  />
                </li>
                <li>
                  <input
                    className='rounded border border-2'
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    className='rounded border border-2'
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className='text-start'>
                  <input type="submit" className="btnhover btn btn-success" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div> */}
        <div className="col py-2">
          <p className='mb-1'>For in-person consultations or treatments, you are welcome to visit my clinic during working hours.</p>
          <p className='mb-0'>124-A, Maa Shakti Apartment A1 BLOCK Paschim Vihar
          New Delhi, Delhi-110063 :</p>
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
