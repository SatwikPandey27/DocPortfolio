import React from 'react'
import './about.css'
import pic from '../../assets/image3.jpeg'
import psy from '../../assets/psych2.jpeg'

export default function AboutDrKhushboo() {
  return (
    <div className='main'>
    <div className="row row1 mt-5 pt-3"><img className='pe-0' src={psy} alt="about1" /></div>
    <div className="row main-row mx-auto">
      <div className="col-2 mx-auto me-5 imgpicalign">
        <img src={pic} alt="dr khushboo here" className="imgfluid border rounded-circle border-black border-1 imgpic" />
      </div>
      <div className="background-container pt-0 col-9 ms-5 ps-5">
      <br />
      <br />
      <div className='text-content'>
        <p>
          <div className='fs-2 pb-1'>Dr. Khushboo Kansal</div>
            Consultant Psychiatrist <br />
            MBBS, MD Psychiatry <br />
            Membership of the Royal College of Psychiatrists, England (MRCPsych)
            Perinatal Mental Health Certification (PMH-C), Postpartum Support International <br />
        </p>
      </div>
    </div>
    </div>
    <div className='row media mt-5'>
      <div className="col-9 mx-auto imgtextalign">
        <h1>Consultant Psychiatrist</h1>

        <p>I am a consultant psychiatrist with a decade of clinical experience in mental health. After completing my MBBS and MD in psychiatry from reputed medical colleges in India, I worked at various private and government hospitals across Delhi NCR.</p>

        <p>To further broaden my expertise, I traveled to Australia and the UK, where I gained invaluable experience in treating complex mental health issues. I earned the prestigious Membership of the Royal College of Psychiatrists, England (MRCPsych) and received Perinatal Mental Health Certification (PMH-C) from Postpartum Support International.</p>

        <h2>Accolades & Contributions</h2>
        <ul>
            <li>Presented at both national and international conferences.</li>
        </ul>

        <p>I believe in a holistic approach to mental health, integrating aspects of nutritional psychiatry and compassion-focused therapy. My areas of specialization span general adult psychiatry, neuropsychiatry, child psychiatry, old age psychiatry, and perinatal and women’s mental health.</p>

        <h2>Perinatal Mental Health</h2>
        <p>I have a deep focus on mental health issues during the perinatal period, which I believe to be one of the most crucial times in a family’s life. Adequate care during this phase can prevent a range of mental health challenges later in life.</p>
      </div>
    </div>
    </div>
  )
}
