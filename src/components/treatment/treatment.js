import './treatment.css'
import React from 'react'
import { FaBrain, FaHeartbeat, FaBaby, FaWalking, FaStethoscope, FaLungs } from 'react-icons/fa'
import { GiJoint } from 'react-icons/gi'
import img from '../../assets/m1.jpeg'
import img2 from '../../assets/m2.jpeg'
import img3 from '../../assets/m3.jpeg'//2 spine
import img4 from '../../assets/m4.jpeg'//1 spine
import img5 from '../../assets/m5.jpeg'
import women from '../../assets/women.png'
import geria from '../../assets/geria.png'
import img8 from '../../assets/n1.jpeg'
import resp from '../../assets/resp1.jpg'
import kid from '../../assets/kid1.jpg'

export default function Treatment() {
  return (
    <div className='container'>
      {/* Row 1 */}
      <div className="row mb-2">
        {/* Mental Health Section */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
            <FaBrain size={30} className="me-2" />
            <h5>Mental Health & Disorders</h5>
            <ul>
              <li>Anxiety & Depressive Disorders</li>
              <li>Grief and Loss</li>
              <li>OCD & Eating Disorders</li>
              <li>Trauma Related Disorders</li>
              <li>Stress Management</li>
              <li>Sleep Disorders</li>
              <li>Sexual Dysfunction</li>
            </ul>
            </div>
            <div className="images">
              <img className="eg-imagegh img-fluid" src={img8} alt="Spine Procedure 1" />
            </div>
          </div>
        </div>
        {/* Women’s Health */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
            <FaBaby size={30} className="me-2" />
            <h5>Women's & Postpartum Mental Health</h5>
            <ul>
              <li>Mental Health Concerns Related to Pregnancy</li>
              <li>Postpartum & Fertility Concerns</li>
              <li>Women’s Mental Health</li>
            </ul>
            </div>
            <div className="images">
              <img className="eg-imagegh img-fluid" src={women} alt="Spine Procedure 1" />
            </div>
          </div>
        </div>
        {/* Geriatric Health */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
            <FaHeartbeat size={30} className="me-2" />
            <h5>Geriatric Mental Health</h5>
            <ul>
              <li>Geriatric Mental Health</li>
              <li>Stress Related Disorders</li>
            </ul>
            </div>
            <div className="images">
              <img className="eg-imagegh img-fluid" src={geria} alt="Spine Procedure 1" />
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="row mb-2">
        {/* General Health Issues */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
              <FaStethoscope size={30} className="me-2" />
              <h5>General Health Issues</h5>
              <ul>
                <li>Fever</li>
                <li>Diabetes</li>
                <li>Hypertension</li>
                <li>GIT Problems</li>
              </ul>
            </div>
            <div className="images">
              <img className="eg-imagegh img-fluid" src={img5} alt="Spine Procedure 1" />
            </div>
          </div>
        </div>
        {/* Respiratory and Liver/Kidney Conditions */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">          <FaLungs size={30} className="me-2" />
          <h5>Respiratory, Liver, & Kidney Conditions</h5>
          <ul>
            <div id='Spine'></div>
            <li>Asthma & COPD</li>
            <li>Liver Diseases</li>
            <li>Kidney Disease</li>
          </ul>
          </div>
            <div className="images">
              <img className="eg-image img-fluid" src={kid} alt="Spine Procedure 1" />
              <img className="eg-image img-fluid" src={resp} alt="Spine Procedure 2" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row mb-2">
        {/* Spine & Skeletal Disorders */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
              <FaWalking size={30} className="me-2" />
              <h5>Spine Surgery & Endoscopic Procedures</h5>
              <ul>
                <li>Scoliosis & Kyphosis</li>
                <li>Myelopathy</li>
                <li>Disc Prolapse & Spinal Stenosis</li>
                <li>Endoscopy</li>
                <li>Occipital Cervical Junction</li>
              </ul>
            </div>
            <div className="images">
              <img className="eg-image img-fluid" src={img3} alt="Spine Procedure 1" />
              <img className="eg-image img-fluid" src={img4} alt="Spine Procedure 2" />
            </div>
          </div>
        </div>
        {/* Joint and Musculoskeletal Pain */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <div className="content-with-images">
            <div className="content">
              <GiJoint size={30} className="me-2" />
              <h5>Joint & Musculoskeletal Pain</h5>
              <ul>
                <li>Joint Pains</li>
              </ul>
            </div>
          <div className="images">
            <img className="eg-image img-fluid" src={img} alt="Spine Procedure 1" />
            <img className="eg-image img-fluid" src={img2} alt="Spine Procedure 2" />
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}