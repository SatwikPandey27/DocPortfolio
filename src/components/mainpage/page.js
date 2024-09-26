import React from "react";
import "./page.css";
import Main from "../../assets/generalphysician.jpg";
import col1 from "../../assets/scans.jpg";
import col2 from "../../assets/scans1.jpg";
import ContactUs from '../contact/contact'
import Footer from '../footer/footer'
import logo from '../../assets/logo2.png'
import pic from '../../assets/img1.jpeg'
import pic2 from '../../assets/image2.jpeg'
import pic3 from '../../assets/image3.jpeg'

export default function home() {
  return (
    <>
      <div className="home">
        <div className="images-top justify-center">
          <div className="logo w-100 h-100">
            <div className="logo-img row align-items-center">
              <div className="col-3 col-logo mt-5 ms-4">
                <img loading="lazy" className="logoS border rounded-circle border-3 border-danger-subtle" src={logo} alt="logo here" />
              </div>
              <div className="col ms-1 me-2 mt-5">
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
        </div>
        <div className="row mx-auto text-center px-5 justify-content-around">
          <div className="img-div1 col-12 col-md-4">
            <img className="size-image mx-auto" src={pic2} alt="about section 3" />
            <a className="btn btnhover btn-success mx-auto mt-3" href='/drrajesh'>
              <b>Dr. Rajesh Kansal</b> <> </><i className="bi bi-caret-right-fill"></i>
            </a>
          </div>
          <div className="img-div2 col-12 col-md-4">
            <img className="size-image mx-auto" src={pic3} alt="about section kansal" />
            <a className="btn btnhover btn-success mx-auto mt-3" href='/drkhushboo'>
              <b>Dr. Khushboo Kansal</b> <> </><i className="bi bi-caret-right-fill"></i>
            </a>
          </div>
          <div className="img-div3 col-12 col-md-4">
            <img className="size-image mx-auto" src={pic} alt="about section drnikhil" />
            <a className="btn btnhover btn-success mx-auto mt-3" href="/drnikhil">
              <b>Dr. Nikhil Jain</b> <> </><i className="bi bi-caret-right-fill"></i>
            </a>
          </div>
        </div>
        <div id="contact"></div>
        <br />
        <hr className="mx-5 border-2 mb-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Contact Me</h1>
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
