import React from 'react'
import './about.css'
import abt2 from '../../assets/abt2.png'
import slide1 from '../../assets/drkhushboo1.jpeg'
import slide2 from '../../assets/drkhushboo2.jpeg'
import slide3 from '../../assets/drkhushboo3.jpeg'
import slide4 from '../../assets/drkhushboo4.jpeg'

export default function AboutDrKhushboo() {
  return (
    <div className='main'>
      <div className="row row1">
        <img src={abt2} alt="" />
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
        <h1>Consultant Psychiatrist</h1>

        <p>I am a consultant psychiatrist with a decade of clinical experience in mental health. After completing my MBBS and MD in psychiatry from prestigious medical colleges in India, I have worked at various private and government hospitals across Delhi NCR.</p>

        <p>To further broaden my expertise, I traveled to Australia and the UK, where I gained invaluable experience in treating complex mental health issues. I earned the prestigious Membership of the Royal College of Psychiatrists, England (MRCPsych) and received Perinatal Mental Health Certification (PMH-C) from Postpartum Support International.</p>

        <h2>Accolades & Contributions</h2>
        <ul>
            <li>Presented at both national and international conferences.</li>
        </ul>

        <p>I believe in a holistic approach to mental health, integrating aspects of nutritional psychiatry and compassion-focused therapy. My areas of specialization span general adult psychiatry, neuropsychiatry, child psychiatry, old age psychiatry, and perinatal and women’s mental health.</p>

        <h2>Perinatal Mental Health</h2>
        <p>I have a deep focus on mental health issues during the perinatal period, which I believe to be one of the most crucial times in a family’s life. Adequate care during this phase can prevent a range of mental health challenges later in life.</p>
      </div>
      <div className="col-4">
        <img className='img-fluid' src={slide1} alt="drnikhil" />
        <img className='img-fluid' src={slide2} alt="drnikhil" />
        <img className='img-fluid' src={slide3} alt="drnikhil" />
        <img className='img-fluid' src={slide4} alt="drnikhil" />
      </div>
    </div>
    </div>
  )
}
