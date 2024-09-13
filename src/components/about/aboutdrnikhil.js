import React from 'react'
import './about.css'
import pic from '../../assets/Image1.jpeg'
import spine from '../../assets/spine.jpg'

export default function AboutDrNikhil() {
  return (
    <div className='main'>
    <div className="row row1"><img className='pe-0' src={spine} alt="about1" /></div>
    <div className="row main-row mx-auto">
      <div className="col-2 mx-auto me-5 imgpicalign">
        <img src={pic} alt="dr nikhil here" className="imgfluid border rounded-circle border-success border-4 imgpic" />
      </div>
      <div className="background-container pt-0 col-9 ms-5 ps-5">
      <br />
      <br />
      <div className='text-content'>
        <p>
          <div className='fs-2 pb-1'>Dr Nikhil Jain</div>
          Spine deformity (scoliosis) & endoscopy surgeon <br />
          MBBS, MS Ortho, FNB Spine <br />
          Fellowship Macquarie University Hospital, Sydney, Australia. <br />
          Fellowship Queen’s Medical Center, Nottingham, UK (Royal College of Surgeons England br & Royal College of Surgeons Edinburgh). <br />
          Call - +91-9910668831
        </p>
      </div>
    </div>
    </div>
    <div className='row media'>
      <div className="col-9 mx-auto imgtextalign">
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
        </p>
      </div>
    </div>
    </div>
  )
}
