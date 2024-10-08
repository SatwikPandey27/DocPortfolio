import React from 'react'
import './about.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../footer/footer.css'
import abt1 from '../../assets/abt1.png'
import slide1 from '../../assets/drnikhil1.jpeg'
import slide2 from '../../assets/drnikhil11.jpeg'
import slide3 from '../../assets/drnikhil5.jpeg'
import slide4 from '../../assets/drnikhil10.jpeg'
import slide5 from '../../assets/drnikhil7.png'
import slide6 from '../../assets/drnikhil6.jpeg'

export default function AboutDrNikhil() {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
  const location=[28.5950023630923,77.06935491812179]

  return (
    <div className='main'>
      <div className="row row1">
        <img src={abt1} alt="abt1" />
        {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-size" src={slide2} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-size" src={slide3} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-size" src={slide4} class="d-block w-100" alt="..."/>
              </div>
            </div>
          </div> */}
      </div>
    <div className='row'>
      <div className="col-7 imgtextalign mt-5 pe-4">
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

          <h2>Talks & Publications</h2>
          <ul>
            <li>‘Clinical outcome of interbody fusion for discogenic back pain – prospective study with 2 year follow up’ BASS 2024, 20-22nd March, Bournemouth, UK.</li>
            <li>‘Vascular injury in anterior lumbar fusion surgeries’, Spineweek 2023, 1-5 May, 2023, Melbourne, Australia.</li>
            <li>‘Understanding and improving lordotic correction in lumbar spine during spinal fusion’ DDU 2022 - Sydney, Australia 5-6th August 2022.</li>
            <li>‘Lumbar Canal Stenosis: a clinico-radiological analysis’ at 12TH Annual Conference of ‘Asia Pacific Cervical Spine Society’, New Delhi, 15th -17th November, 2018.</li>
            <li>‘Lumbar Canal Stenosis: a clinico-radiological analysis’ at annual meeting of Instructional Course in Spine Amritsar, 9th – 11th August 2018.</li>
            <li>‘Comminuted fractures in clavicle: operative vs non-operative management’ at ROSACON January 17-19, 2014, Ranthambore, Rajasthan.</li>
            <li>‘A case series of acute painless bilateral foot drop without cauda equina syndrome’ published in Journal of Orthopedic Case Reports, October 2021.</li>
            <li>‘Occipitocervical fusion and dysphagia. The role of head neck alignment: a case report’ published in Journal of Clinical Orthopaedics and Trauma, 4th August, 2021.</li>
            <li>‘A rare loss of intraoperative neuro-monitoring signals with laterally misplaced pedicle screw: Case Report’ published in JSM Clinical case reports, 4th Aug, 2020; ISSN: 2373-9819.</li>
            <li>‘Lumbar Disc Herniation: A review article’ accepted in IP International Journal of Orthopaedic Rheumatology 10/05/2020. Print ISSN: 2581-8112; Online ISSN: 2581-9151.</li>
            <li>‘Lumbar Canal Stenosis: a prospective clinico-radiological analysis’ Original article, published online in Journal of Neurological Surgery Part A: Central European Neurosurgery, 27th Feb 2020.</li>
            <li>‘Posterior Surgical options for Spondylotic Cervical Myelopathy: Review article’ published in Indian Spine Journal, Vol. 2, January -June 2019.</li>
            <li>Cryptococcosis of Thoracic Vertebra Mimicking Tuberculosis: A Case Report published in Surgical Neurology International, May 2019.</li>
            <li>Case Report: Odontoid fracture with missed diagnosis of Transverse Atlantal Ligament (TAL) injury resulting in late‐onset instability published in Surgical Neurology International, November 2018.</li>
            <li>‘Tibiocalcaneal Arthrodesis using Intramedullary Nail for Severe Rigid Equinovarus Foot Deformity in Adults’ Original article, published in Journal of Orthopedics, Traumatology and Rehabilitation, Vol 9, May 2017.</li>
            <li>‘Comparative study on management of clavicle fractures treated conservatively or by plate fixation’ Original article, published in Journal of Orthopedics, Traumatology and Rehabilitation, Vol.5, Nov. 2012.</li>
          </ul>
<br />
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
      <div className="col-4 mt-0">
        <img src={slide1} alt="" className="img-fluid" />
        <img src={slide2} alt="" className="img-fluid" />
        <img src={slide3} alt="" className="img-fluid" />
        <img src={slide4} alt="" className="img-fluid" />
        <img src={slide5} alt="" className="img-fluid" />
        <img src={slide6} alt="" className="img-fluid" />
        {/* <div className='text-center mb-3 border border-2'>
          <h1>Dr. Nikhil Jain</h1>
          <p>
            MBBS <br /> MS Ortho, FNB Spine Surgery <br /> Fellowship MUH Hospital, Sydney, Australi <br /> Fellowship QMC, Nottingham, UK
            <br />
          </p>
        </div> */}
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
