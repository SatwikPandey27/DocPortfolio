import React from "react";
import "./page.css";
// import Main from "../../assets/generalphysician.jpg";
// import col1 from "../../assets/scans.jpg";
// import col2 from "../../assets/scans1.jpg";
import ContactUs from '../contact/contact'
import ReviewCarousel from '../testimonials/testimonials'
import Footer from '../footer/footer'
import Treatment from "../treatment/treatment";
// import logo from '../../assets/logo2.png'
import pic from '../../assets/img1.jpeg'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import pic2 from '../../assets/image2.jpeg'
import pic3 from '../../assets/image3.jpeg'

export default function home() {
  return (
    <>
      <div className="home">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide4} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img className="img-size" src={slide1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img className="img-size" src={slide2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img className="img-size" src={slide3} class="d-block w-100" alt="..."/>
          </div>
        </div>
        {/* Buttons are removed or commented out */}
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> */}
      </div>

      <div id="treatment"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Conditions Treated</h1>
          <br />
          <Treatment/>
        </div>


        <div id="team"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>

        <div className="row mx-auto text-center px-5 justify-content-around">
          <h1 className="text-center">Our Team</h1>
          <br />
          <br />
          <br />
          <div class="card img-div1 col-13 col-md-4">
            <img src={pic2} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Rajesh Kansal</h5>
              <p class="card-text px-0">General Physician <br />
              MBBS
              <br /> 40 years of experience in general medicine</p>
              <br />
              <br />
              <a href="/drrajesh" class="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div class="card img-div1 col-13 col-md-4">
            <img src={pic3} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Khushboo Kansal</h5>
              <p class="card-text px-0">Dr Khushboo Kansal <br />
                Consultant Integrative Psychiatrist <br />
                Lead in Perinatal Mental Health Services <br />
                MBBS, MD Psychiatry, MRC Psych (UK), PMH-C</p>
              <a href="/drkhushboo" class="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div class="card img-div3 col-13 col-md-4">
            <img src={pic} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Nikhil Jain</h5>
              <p class="card-text px-0">Consultant spine deformity & endoscopy surgeon <br /> MBBS, MS Ortho, FNB Spine</p>
              <a href="https://www.linkedin.com/company/drnikhiljain" className="bi-linkedin socials-specific"> </a>
              <a href="https://www.youtube.com/@Dr.NikhilJain" className="bi-youtube socials-specific"> </a>
              <br />
              <br />
              <a href="/drnikhil" class="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
        </div>
        <div id="testimonials"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Patient Testimonials</h1>
          <br />
          <ReviewCarousel/>
        </div>
        <div id="contact"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Contact Us</h1>
          <br />
          <ContactUs/>
        </div>
        <div id="footer">
          <Footer />
        </div>
        <div className="floating-buttons">
        <a href="tel:+91 88105 60977" className="call-button">
          <i className="bi bi-telephone-fill"></i>
        </a>
        <a href="https://wa.me/8810560977" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      </div>
    </>
  );
}
