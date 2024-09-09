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
        <p>
          I am a spine deformity and endoscopy surgeon. I have done FNB spine surgery from Sir Gangaram Hospital, Delhi,  Complex spine fellowship from Macquarie University, Sydney, Australia and Advanced spine fellowship from Queen’s Medical Centre, Nottingham, UK. <br />

          I have worked at various reputed hospitals across Delhi NCR including Jaypee hospital, Noida and Indraprastha Apollo Hospitals, Sarita Vihar. I went abroad for spinal fellowships to make myself at par with the international standards of spinal care.  At present, I am a consultant at Manipal Hospitals Dwarka, Delhi. <br />

          I am expert at all spinal surgeries including occipito- cervical, cervical , thoracic and lumbar spinal surgeries. My forte is adult spinal deformity- ATP/ ALIF and paediatric  scoliosis. I also do endoscopic spine surgeries. <br />

          I have published in both national and international journals. I have presented at both national and international conferences. I was awarded best fellow award by Sir Ganga Ram Hospital, New Delhi. <br />

          I enjoy my field and I strive to provide best possible spinal advice and care. <br />


          I treat : <br />
          <ul>
            <li>Occipital cervical instability and fractures </li>
            <li>Cervical spine fractures, disc prolapse, cervical myelopathy </li>
            <li>Thoracic spine fractures, and disc prolapse </li>
            <li>Lumbar spine fractures and disc prolapse </li>
            <li>Sacrum fractures </li>
            <li>Spinal infections </li>
            <li>Spinal cord compression </li>
            <li>Back pain </li>
            <li>Neck pain </li>
            <li>Sciatica </li>
            <li>Scoliosis </li>
            <li>Kyphosis </li>
            <li>Spondylo listhesis </li>
            <li>TB spine </li>
          </ul>

          <b>Dr Nikhil Jain</b> <br />
          Spine deformity (scoliosis) & endoscopy surgeon <br />
          MBBS, MS Ortho, FNB Spine <br />
          Fellowship Macquarie University Hospital, Sydney, Australia. <br />
          Fellowship Queen’s Medical Center, Nottingham , UK (Royal college of Surgeons England & Royal College of Surgeons Edinburgh). <br />
          Call - +91-9910668831
        </p>
      </div>
    </div>
  )
}
