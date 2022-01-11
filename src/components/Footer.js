import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-icon">
          <AiOutlineTwitter className="twitter" />
        </div>
        <div className="footer-icon">
          <FaFacebookF className="facebook" />
        </div>
        <div className="footer-icon">
          <FiInstagram className="insta" />
        </div>
        <div className="footer-icon">
          <BsGithub className="github" />
        </div>
      </div>
    </div>
  );
}
