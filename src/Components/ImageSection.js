import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>

      <div className="about-info">
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Md. Azizul Haque</p>
            <p>: 32</p>
            <p>: Bangladeshi</p>
            <p>: Bangla, English</p>
            <p>: Savar, Dhaka - 1343</p>
          </div>
        </div>
        <br />
        <a
          type="button"
          href="https://drive.google.com/drive/u/0/folders/1-mI-C9oM--c3wvp3UGCLv8wZZ2yjdocj"
          className="btn"
          rel="noreferrer"
          target="_blank"
          style={{ "text-decoration": "none" }}
        >
          Download Cv
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
