// import React from 'react'
import logo from "/assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-xl">
      <nav className=" container mx-auto flex  justify-between items-center p-4 bg-white   ">
        <img src={logo} alt="" />
        <ul className="flex gap-6">
          <li className="font-semibold     text-lg">
            <a href="#" className="hover:text-navbar">
              Home
            </a>{" "}
          </li>
          <li className="font-semibold     text-lg">
            <a href="#" className="hover:text-navbar">
              Features
            </a>{" "}
          </li>
          <li className="font-semibold     text-lg">
            <a href="#" className="hover:text-navbar">
              Community
            </a>{" "}
          </li>
          <li className="font-semibold     text-lg">
            <a href="#" className="hover:text-navbar">
              Blog
            </a>{" "}
          </li>
          <li className="font-semibold     text-lg">
            <a href="#" className="hover:text-navbar">
              Contact
            </a>{" "}
          </li>
        </ul>

        <button className="bg-inherit flex justify-end font-semibold text-lg hover:text-navbar"> Register Now</button>
      </nav>
    </div>
  );
};

export default Navbar;
