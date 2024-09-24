import React from 'react'
import './about.css'
import pic from '../../assets/img1.jpeg'
import spine from '../../assets/spine.jpg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../footer/footer.css'

export default function AboutDrNikhil() {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
  const location=[28.5950023630923,77.06935491812179]

  return (
    <div className='main'>
    <div className="row row1"><img className='pe-0' src={spine} alt="about1" /></div>
    <div className="row main-row mx-auto">
      <div className="col-2 mx-auto me-5 imgpicalign">
        <img src={pic} alt="dr nikhil here" className="imgfluid border rounded-circle border-black border-1 imgpic" />
      </div>
      <div className="background-containern pt-0 col-9 ms-5 p-5 pb-2">
      <br />
      <div className='text-content'>
        <p>
          <div className='fs-1 pb-1'>Dr. Nikhil Jain</div>
          Spine deformity (scoliosis) & endoscopy surgeon <br />
          MBBS, MS Ortho, FNB Spine <br />
          Fellowship Macquarie University Hospital, Sydney, Australia. <br />
          Fellowship Queen’s Medical Center, Nottingham, UK (Royal College of Surgeons England br & Royal College of Surgeons Edinburgh). <br />
          Call - +91-9910668831
        </p>
      </div>
    </div>
    </div>
    <div className='row media mt-5'>
      <div className="col-9 mx-auto imgtextalign">
          <h1>Consultant Spine Deformity & Endoscopic Spine Surgeon</h1>

          <p>With extensive training in advanced spine surgery, I am a specialized consultant in spine deformities and endoscopy. My qualifications include an FNB in Spine Surgery from Sir Ganga Ram Hospital, New Delhi, along with prestigious fellowships in Complex Spine Surgery from Macquarie University, Sydney, and Advanced Spine Surgery from Queen’s Medical Centre, Nottingham, UK.</p>

          <p>I have practiced at leading institutions across Delhi NCR, including Jaypee Hospital in Noida and Indraprastha Apollo Hospitals in Sarita Vihar. My international fellowships have equipped me to meet the highest global standards in spinal care. Currently, I am a consultant at Manipal Hospitals, Dwarka, Delhi.</p>

          <h2>Areas of Expertise</h2>
          <p>I specialize in all forms of spinal surgery, including occipito-cervical, cervical, thoracic, and lumbar procedures. My particular focus is on adult spinal deformity (ATP/ALIF) and pediatric scoliosis. I am also proficient in endoscopic spine surgery, offering minimally invasive solutions for complex spinal conditions.</p>

          <h2>Accolades & Contributions</h2>
          <ul>
              <li>Published in esteemed national and international journals.</li>
              <li>Presented at prominent national and international conferences.</li>
              <li>Honored with the "Best Fellow Award" from Sir Ganga Ram Hospital, New Delhi.</li>
          </ul>

          <p>I am passionate about advancing spinal care and am dedicated to providing my patients with the most effective, evidence-based treatment options.</p>

          <h2>Conditions Treated</h2>
          <div className="row">
            <div className="col">
              <ul>
                <li>Back pain</li>
                <li>Neck pain</li>
                <li>Sciatica</li>
                <li>Scoliosis</li>
                <li>Kyphosis</li>
                <li>Spondylo listhesis</li>
                <li>TB spine</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Occipital cervical instability and fractures</li>
                <li>Cervical spine fractures, disc prolapse, cervical myelopathy</li>
                <li>Thoracic spine fractures, and disc prolapse</li>
                <li>Lumbar spine fractures and disc prolapse</li>
                <li>Sacrum fractures</li>
                <li>Spinal infections</li>
                <li>Spinal cord compression</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    <footer className="site-footer section-padding border-3 border-top border-danger-subtle">
      <div>
        <div className="row mx-auto">
        <div className="col mx-4">
          <h5 className="mb-lg-4 mb-3">Working Hours</h5>

          <ul className="list-group list-group-flush">
            
            <li className="list-group-item d-flex">
              Monday - Saturday
              <span>9:00 AM - 5:00 PM</span>
            </li>

            <li className="list-group-item d-flex">
              Sunday
              <span>Closed</span>
            </li>

          </ul>
        </div>
          <div className="col mx-4">
            <h5 className="mb-lg-4 mb-3">Clinic Address</h5>
            <div className="col pt-1">
              <p className='mb-1'>For in-person consultations or treatments, you are welcome to visit my clinic during working hours.</p>
              <p className='mb-0'>Room no - 68, OPD - 6, Floor 5 , 
                Manipal hospital, Sector 6, Dwarka, New Delhi - 110075 :</p>
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
          <div className="col mx-4">
            <h5 className="mb-lg-4 mb-3">Socials</h5>
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/company/drnikhiljain" className="social-icon-link bi-linkedin"> </a></li>
              <li><a href="https://www.youtube.com/@Dr.NikhilJain" className="social-icon-link bi-youtube"> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
