// import React from 'react'
import logo from "/assets/images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-footer grid grid-cols-1 sm:py-3 md:grid-cols-4 sm:grid-cols-4 justify-around py-[30px] px-[35px]">
        <div className="inline">
          <img src={logo} alt="" />
          <h1 className="text-white text-[24px] font-semibold">Nexcent</h1>
          <p className="text-[16px] text-white">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-[16px] text-white">All rights reserved</p>

          {/* Logos */}
          <div className="logos flex flex-row justify-start px-1">
            <FaInstagram className="text-3xl text-white  px-1 " />
            <IoLogoYoutube className="text-3xl text-white px-1" />
            <FaLinkedinIn className="text-3xl text-white px-1" />
            <FaTwitter className="text-3xl text-white px-1" />{" "}
          </div>
        </div>
        {/* Company */}
        <div>
          <h2 className="text-[20px] font-semibold text-white py-3">Company</h2>
          <ul className="text-white text-[16px]">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-white py-3">Support</h2>
          <ul className="text-white text-[16px]">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-white py-3">
            Stay up to date
          </h2>
          <input type="mail" className="bg-grey w-[300px] shadow-lg border-[2px] border-black rounded-lg my-3 text-white font-bold p-[5px]" name="" id="" placeholder="Enter Your Mail" />
          <button className="bg-navbar w-[140px] rounded-lg my-3 text-white font-bold p-[5px]">Register</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
