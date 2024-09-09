import React from 'react'
import './about.css'
import pic from '../../assets/Image1.jpeg'

export default function About() {
  return (
    <div className='row media'>
      <div className="col-2 mx-auto me-5 imgpicalign">
        <img src={pic} alt="dr nikhil here" className="imgfluid border rounded-circle border-success border-4 imgpic" />
      </div>
      <div className="col-7 mx-auto ms-5 imgtextalign">
        <p>I am a dedicated and passionate orthopaedic surgeon with a specialization in spine surgery. With over 15 years of experience in the field, I have developed a strong expertise in diagnosing and treating various spinal disorders and conditions.</p>
        <p>
           My academic achievements include obtaining USMLE certification and fellowships in orthopaedic spine surgery from Sir Ganga Ram Hospital and advanced spine surgery from Macquarie University Hospital and Queen's Medical Center.
           I've worked as a consultant spine surgeon in leading hospitals in India, including Jaypee Hospital and Indraprastha Apollo Hospitals, and have received the Best FNB Ravi K. Jerath Award.
           As a skilled and compassionate surgeon, I focus on delivering personalized care to my patients and staying updated with the latest advancements in spine surgery.
        </p>
      </div>
    </div>
  )
}
