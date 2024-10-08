import React from 'react'
import './about.css'
import abt3 from '../../assets/abt3.png'
import slide1 from '../../assets/drrajesh1.jpeg'
import slide2 from '../../assets/drrajesh2.jpeg'

export default function AboutDrRajesh() {
  return (
    <div className='main'>
      <div className="row row1">
        <img src={abt3} alt="" />
        {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img className="img-size" src={slide2} class="d-block w-100" alt="..."/>
              </div>
            </div>
          </div> */}
      </div>
    <div className='row'>
      <div className="col-7 imgtextalign mt-5 pe-4">
        <h1>General Physician in Paschim Vihar, Delhi</h1>

        <p>I am a seasoned doctor with 40 years of experience in the medical field. I completed my MBBS from Sardar Patel Medical College in 1984, and since then, I have gained extensive expertise in treating a wide range of general medical conditions. Over the course of my career, I have built a reputation for providing comprehensive and compassionate care to patients of all ages.</p>

        <p>My expertise spans various aspects of internal medicine, preventive care, and the management of chronic illnesses. I am proficient in diagnosing and treating ailments such as diabetes, hypertension, respiratory infections, gastrointestinal disorders, and more. I stay up-to-date with advancements in the medical field to ensure that my patients receive the most effective and current treatments available.</p>

        <p>Known for my thorough and dedicated approach to patient care, I focus on understanding the root causes of health issues and crafting personalized treatment plans. My patient-centric approach helps individuals not only recover from illness but also maintain and promote overall good health through lifestyle modifications and preventive measures. I emphasize the importance of preventive care and regular health check-ups, advocating for proactive measures to prevent the onset of serious medical conditions.</p>

        <p>With a longstanding presence in Paschim Vihar, Delhi, I have served the local community with dedication and integrity. My empathetic approach, combined with my extensive experience, has earned me the trust and respect of my patients, many of whom have been under my care for years.</p>

        <p>If you're looking for a reliable general physician who can provide expert medical advice, diagnosis, and treatment, I am dedicated to promoting the overall health and well-being of my patients.</p>
      </div>
      <div className="col-4">
        <img className='img-fluid' src={slide1} alt="drrajesh" />
        <img className='img-fluid' src={slide2} alt="drrajesh" />
      </div>
    </div>
    </div>
  )
}
