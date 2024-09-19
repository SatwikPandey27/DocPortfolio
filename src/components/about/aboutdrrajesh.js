import React from 'react'
import './about.css'
import pic from '../../assets/image2.jpeg'
import gp from '../../assets/gp.jpg'

export default function AboutDrRajesh() {
  return (
    <div className='main'>
    <div className="row row1"><img className='pe-0 mt-5 pt-4' src={gp} alt="about1" /></div>
    <div className="row main-row custwidth">
      <div className="col-2 me-5 imgpicalign">
        <img src={pic} alt="dr rajesh here" className="imgfluid border rounded-circle border-black border-1 imgpic" />
      </div>
      <div className="background-container pt-0 col-9 ms-5 ps-5 me-0 pe-0 custwid">
        <br />
        <br />
        <div className='text-content'>
          <p>
            <div className='fs-2 pb-1'>Dr. Rajesh Kansal</div>
            General Physician, Paschim Vihar, Delhi <br />
            MBBS, Sardar Patel Medical College (1984) <br />
            40 years of experience in general medicine <br />
          </p>
        </div>
      </div>
    </div>
    <div className='row media mt-5'>
      <div className="col-9 mx-auto imgtextalign">
        <h1>Dr. Rajesh Kansal</h1>
        <h2>General Physician in Paschim Vihar, Delhi</h2>

        <p>Dr. Rajesh Kansal is a seasoned doctor with 40 years of experience in the medical field. He completed his MBBS from Sardar Patel Medical College in 1984 and has since gained extensive expertise in treating a wide range of general medical conditions. Over the course of his career, he has built a reputation for providing comprehensive and compassionate care to patients of all ages.</p>

        <p>Dr. Kansal's expertise extends across various aspects of internal medicine, preventive care, and the management of chronic illnesses. He is proficient in diagnosing and treating ailments such as diabetes, hypertension, respiratory infections, gastrointestinal disorders, and more. His commitment to staying up-to-date with advancements in the medical field ensures that his patients receive the most effective and current treatments available.</p>

        <p>Known for his thorough and dedicated approach to patient care, Dr. Kansal focuses on understanding the root causes of health issues and crafting personalized treatment plans. His patient-centric approach helps individuals not only recover from illness but also maintain and promote overall good health through lifestyle modifications and preventive measures. Dr. Kansal emphasizes the importance of preventive care and regular health check-ups, advocating for proactive measures to prevent the onset of serious medical conditions.</p>

        <p>With a longstanding presence in Paschim Vihar, Delhi, Dr. Kansal has served the local community with dedication and integrity. His empathetic approach, combined with his extensive experience, has earned him the trust and respect of his patients, many of whom have been under his care for years.</p>

        <p>If you're looking for a reliable general physician who can provide expert medical advice, diagnosis, and treatment, Dr. Rajesh Kansal is a trusted choice, dedicated to promoting the overall health and well-being of his patients.</p>      </div>
    </div>
    </div>
  )
}
