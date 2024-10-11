import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='container'>
      <p>We are committed to providing compassionate and personalized care for all our patients. Whether you're looking to schedule an appointment, have a medical inquiry, or need advice, we are here to help. You can reach us through the following methods:</p>
      <div className="contact-page row">
        <div className='col text-center py-2 mx-2'>
          <p>To get in touch directly, contact us on the number below :</p>
          <p>For Dr. Khushboo and Dr. Rajesh : </p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 88105 60977</b></p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 98120 39263</b></p>
          <p>For Dr. Nikhil : </p>
          <p><i className="bi bi-telephone-fill"></i> <b>+91 9910668831</b></p>
        </div>
      </div>
    </div>
  )
}
