import React, { useEffect } from "react";
import "./page.css";
import ReviewCarousel from '../testimonials/testimonials'
import Footer from '../footer/footer'
import Treatment from "../treatment/treatment";
import AboutUs from "../about/aboutus";
import Faq from "../faq/faq";
import pic from '../../assets/img1.jpeg';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import pic2 from '../../assets/image2.jpeg';
import pic3 from '../../assets/image3.jpeg';

export default function Home() {
  useEffect(() => {
    const myCarousel = document.querySelector('#carouselExampleAutoplaying');
    new window.bootstrap.Carousel(myCarousel, {
      interval: 3000,
      pause: false,
    });
  }, []);
  
  return (
    <>
      <div className="home">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide4} className="d-block w-100" alt="Carousel Slide 4" />
            </div>
            <div className="carousel-item">
              <img className="img-size d-block w-100" src={slide1} alt="Carousel Slide 1" />
            </div>
            <div className="carousel-item">
              <img className="img-size d-block w-100" src={slide2} alt="Carousel Slide 2" />
            </div>
            <div className="carousel-item">
              <img className="img-size d-block w-100" src={slide3} alt="Carousel Slide 3" />
            </div>
          </div>
        </div>

        <div id="about"></div>
        <br />
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">About us</h1>
          <br />
          <AboutUs/>
        </div>

        <div id="treatment"></div>
        <br />
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Conditions Treated</h1>
          <br />
          <Treatment/>
        </div>

        <div id="team"></div>
        <br />
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>

        <div className="row mx-auto text-center px-5 justify-content-around">
          <h1 className="text-center">Our Team</h1>
          <br />
          <br />
          <br />
          <div className="card img-div1 col-13 col-md-4">
            <img src={pic2} className="card-img-top pt-2" alt="Dr. Rajesh Kansal"/>
            <div className="card-body">
              <h5 className="card-title">Dr. Rajesh Kansal</h5>
              <p className="card-text px-0">General Physician <br />
                MBBS <br /> 40 years of experience in general medicine</p>
              <br />
              <a href="/drrajesh" className="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div className="card img-div1 col-13 col-md-4">
            <img src={pic3} className="card-img-top pt-2" alt="Dr. Khushboo Kansal"/>
            <div className="card-body">
              <h5 className="card-title">Dr. Khushboo Kansal</h5>
              <p className="card-text px-0">
                Consultant Integrative Psychiatrist <br />
                Lead in Perinatal Mental Health Services <br />
                MBBS, MD Psychiatry, MRC Psych (UK), PMH-C</p>
              <a href="http://www.linkedin.com/in/khushboo-kansal-14749252" target="_blank" rel="noopener noreferrer" className="bi-linkedin socials-specific"> </a>
              <br />
              <a href="/drkhushboo" className="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div className="card img-div3 col-13 col-md-4">
            <img src={pic} className="card-img-top pt-2" alt="Dr. Nikhil Jain"/>
            <div className="card-body">
              <h5 className="card-title">Dr. Nikhil Jain</h5>
              <p className="card-text px-0">MBBS <br /> MS Ortho, FNB Spine Surgery <br /> Fellowship MUH Hospital, Sydney, Australia <br /> Fellowship QMC, Nottingham, UK</p>
              <a href="https://www.linkedin.com/company/drnikhiljain" target="_blank" rel="noopener noreferrer" className="bi-linkedin socials-specific"> </a>
              <a href="https://www.youtube.com/@Dr.NikhilJain" target="_blank" rel="noopener noreferrer" className="bi-youtube socials-specific"> </a>
              <br />
              <a href="/drnikhil" className="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
        </div>

        <div id="testimonials"></div>
        <br />
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Patient Testimonials</h1>
          <br />
          <ReviewCarousel/>
        </div>

        <div id="faq"></div>
        <br />
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Frequently Asked Questions</h1>
          <br />
          <Faq />
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
