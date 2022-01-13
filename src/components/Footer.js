/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div>
          <span>Viewing 1-5 of 15</span>
        </div>
        <div className="page-img">
          <span>
            <img className="img"
              src={process.env.PUBLIC_URL + "/Image/orange-dot.svg"}
              alt="Image not loaded"
            />
            <img className="img"
              src={process.env.PUBLIC_URL + "/Image/blue-dot.svg"}
              alt="Image not loaded"
            />
            <img className="img"
              src={process.env.PUBLIC_URL + "/Image/blue-dot.svg"}
              alt="Image not loaded"
            />
            <img className="img"
              src={process.env.PUBLIC_URL + "/Image/blue-dot.svg"}
              alt="Image not loaded"
            />
          </span>
        </div>
        <div className="copyright">
          <span>© Copyright 2018 HighRadius. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
