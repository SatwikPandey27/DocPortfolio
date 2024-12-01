import "./gallery.css";
import React from "react";

// Dr. Khushboo's images
import drKhushboo1 from "../../assets/drkhushboo1.jpeg";
import drKhushboo2 from "../../assets/drkhushboo2.jpeg";
import drKhushboo3 from "../../assets/drkhushboo3.jpeg";
import drKhushboo4 from "../../assets/drkhushboo4.jpeg";

// Dr. Rajesh's images
import drRajesh1 from "../../assets/drrajesh1.jpeg";
import drRajesh2 from "../../assets/drrajesh2.jpeg";

// Dr. Nikhil's images
import drNikhil1 from "../../assets/drnikhil1.jpeg";
import drNikhil2 from "../../assets/drnikhil11.jpeg";
import drNikhil3 from "../../assets/drnikhil5.jpeg";
import drNikhil4 from "../../assets/drnikhil10.jpeg";
import drNikhil5 from "../../assets/drnikhil7.png";
import drNikhil6 from "../../assets/drnikhil6.jpeg";
import drNikhil7 from "../../assets/new1.jpeg";
import drNikhil8 from "../../assets/new2.jpeg";
// import drNikhil9 from "../../assets/new3.jpeg";
import drNikhil10 from "../../assets/new4.jpeg";
import drNikhil11 from "../../assets/new5.jpeg";

export default function Gallery() {
  return (
    <div className="gallery-container">
      {/* Dr. Khushboo's Section */}
      <h2>Dr. Khushboo Kansal</h2>
      <div className="row">
        <img src={drKhushboo1} alt="Dr. Khushboo 1" className="gallery-img" />
        <img src={drKhushboo2} alt="Dr. Khushboo 2" className="gallery-img" />
        <img src={drKhushboo3} alt="Dr. Khushboo 3" className="gallery-img" />
        <img src={drKhushboo4} alt="Dr. Khushboo 4" className="gallery-img" />
      </div>

      {/* Dr. Rajesh's Section */}
      <h2>Dr. Rajesh Kansal</h2>
      <div className="row">
        <img src={drRajesh1} alt="Dr. Rajesh 1" className="gallery-img" />
        <img src={drRajesh2} alt="Dr. Rajesh 2" className="gallery-img" />
        <img src={drRajesh2} alt="Dr. Rajesh 2" className="gallery-img" />
      </div>

      {/* Dr. Nikhil's Section */}
      <h2>Dr. Nikhil Jain</h2>
      <div className="row">
        <img src={drNikhil1} alt="Dr. Nikhil 1" className="gallery-img" />
        <img src={drNikhil8} alt="Dr. Nikhil 8" className="gallery-img" />
        <img src={drNikhil2} alt="Dr. Nikhil 2" className="gallery-img" />
        <img src={drNikhil3} alt="Dr. Nikhil 3" className="gallery-img" />
        <img src={drNikhil4} alt="Dr. Nikhil 4" className="gallery-img" />
        <img src={drNikhil5} alt="Dr. Nikhil 5" className="gallery-img" />
        <img src={drNikhil6} alt="Dr. Nikhil 6" className="gallery-img" />
        <img src={drNikhil7} alt="Dr. Nikhil 7" className="gallery-img" />
        {/* <img src={drNikhil9} alt="Dr. Nikhil 9" className="gallery-img" /> */}
        <img src={drNikhil10} alt="Dr. Nikhil 10" className="gallery-img" />
        <img src={drNikhil11} alt="Dr. Nikhil 11" className="gallery-img" />
      </div>
    </div>
  );
}
