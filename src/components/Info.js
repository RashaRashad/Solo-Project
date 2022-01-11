import React from "react";
import img from "../img.jpg";
import "../style.css";
import About from "./About";
import Intrests from "./Intrests";
import Footer from "./Footer";

import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

export default function Info() {
  return (
    <div className="wrapper">
      <div>
        <img src={img} alt="img" className="logo" />
      </div>

      <div className="text1">Rasha Rashad</div>
      <div className="text2">FrontEnd developer</div>
      <div className="text3">RashaRashad.Website</div>
      <div>
        <button className="btn1">
          <MdEmail className="email" />
          Email
        </button>
        <button className="btn2">
          <BsLinkedin className="linkedn" />
          Linkedln
        </button>
      </div>
      <About />
      <Intrests />
      <Footer />
    </div>
  );
}
