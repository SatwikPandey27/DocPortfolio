import React from "react";
import "./page.css";
// import Main from "../../assets/generalphysician.jpg";
// import col1 from "../../assets/scans.jpg";
// import col2 from "../../assets/scans1.jpg";
import ContactUs from '../contact/contact'
import ReviewCarousel from '../testimonials/testimonials'
import Footer from '../footer/footer'
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
        {/* <div className="images-top justify-center">
          <div className="logo w-100 h-100">
            <div className="logo-img row align-items-center">
              <div className="col-3 col-logo mt-5 ms-4">
                <img loading="lazy" className="logoS border rounded-circle border-3 border-danger-subtle" src={logo} alt="logo here" />
              </div>
              <div className="col">
                <div style={{ backgroundColor: 'rgba(240, 248, 255, 0.4)', padding: '10px 25px', borderRadius: '10px', display: 'inline-block', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', marginTop:'50px' }}>
                  <p className="clinic">
                    <b>Satyak Healthcare Clinic</b><br />
                    <p className="add">
                      124-A, Maa Shakti Apartment A1 BLOCK Paschim Vihar<br />
                      New Delhi, Delhi-110063
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mx-0 px-0">
              <img className="img-fluid img-main w-100 px-0" loading="lazy" src={Main} alt="" />
            </div>
            <div className="col-4 mx-0 px-0 col-img">
              <div className="row">
                <img loading="lazy" className="img-fluid w-100" src={col2} alt="robotic_surgery" />
              </div>
              <div className="row">
                <img loading="lazy" className="img-fluid w-100" src={col1} alt="scans" />
              </div>
            </div>
          </div>
        </div> */}

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
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div id="team"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>

        <div className="row mx-auto text-center px-5 justify-content-around">
          <h1 className="text-center">Our Team</h1>
          <br />
          <br />
          <br />
          <div class="card img-div1 col-12 col-md-4">
            <img src={pic2} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Rajesh Kansal</h5>
              <p class="card-text px-0">General Physician <br /> 40 years of experience in general medicine</p>
              <a href="/drrajesh" class="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div class="card img-div1 col-12 col-md-4">
            <img src={pic3} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Khushboo Kansal</h5>
              <p class="card-text px-0">Consultant Psychiatrist <br /> MBBS, MD Psychiatry</p>
              <br /><br />
              <a href="/drkhushboo" class="btn btn-primary">Know more <i className="bi bi-caret-right-fill"></i></a>
            </div>
          </div>
          <div class="card img-div3 col-12 col-md-4">
            <img src={pic} class="card-img-top pt-2" alt="about section 3"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Nikhil Jain</h5>
              <p class="card-text px-0">Consultant spine deformity (scoliosis) & endoscopy surgeon <br /> MBBS, MS Ortho, FNB Spine</p>
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
      </div>
    </>
  );
}
