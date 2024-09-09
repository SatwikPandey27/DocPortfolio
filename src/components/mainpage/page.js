import React from "react";
import "./page.css";
import Main from "../../assets/img_surgery.jpg";
import col1 from "../../assets/scans.jpg";
import col2 from "../../assets/img_surgery_robot.jpg";
import PfTimeline from "../timeline/timeline";
import ContactUs from '../contact/contact'
import Footer from '../footer/footer'
import About from '../about/about'
import logo from '../../assets/logo2nobgedit.png'

export default function home() {
  return (
    <>
      <div className="home">
        <div className="images-top justify-center">
          <div className="logo w-100 h-100">
            <div className="logo-img row">
              <div className="col-3 col-logo"><img className="logoS" src={logo} alt="logo here"/></div>
              <div className="col ms-1 me-2 mt-5"><p className="clinic"><b>Satyak Healthcare Clinic</b><br /><p className="add">93 A, MaaShakti Apartments, Paschim Vihar<br />New Delhi, Delhi-110063</p></p></div>
            </div>
          </div>
        <div className="row">
            <div className="col mx-0 px-0">
              <img className="img-fluid img-main w-100 px-0" src={Main} alt="" />
            </div>
            <div className="col-4 mx-0 px-0 col-img">
              <div className="row"><img className="img-fluid img-col1 w-100" src={col1} alt="scans" /></div>
              <div className="row"><img className="img-fluid img-col2 w-100" src={col2} alt="robotic_surgery" /></div>
            </div>
          </div>
        </div>
        <div id="about"></div>
        <hr className="mx-5 border-2 my-5 border-success-subtle"/>
        <div>
          <h1 className="text-center m-5">About Me</h1>
          <About/>
        </div>
        <div id="timeline"></div>
        <hr className="mx-5 border-2 my-5 border-success-subtle"/>
        <div>
          <h1 className="text-center m-5">Timeline</h1>
          <PfTimeline/>
        </div>
        <div id="contact"></div>
        <hr className="mx-5 border-2 my-5 border-success-subtle"/>
        <div>
          <h1 className="text-center">Contact Me</h1>
          <ContactUs/>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
