// import React from 'react'
import logo_1 from "/assets/images/Logo (1).png";
import logo_2 from "/assets/images/Logo (2).png";
import logo_3 from "/assets/images/Logo (3).png";
import logo_4 from "/assets/images/Logo (4).png";
import logo_5 from "/assets/images/Logo (5).png";
import logo_6 from "/assets/images/Logo (6).png";

import rafiki from "/assets/images/rafiki.png";


import { MdGroups2 } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";

const Clients = () => {
  return (
    <div>
      <main className="my-[45px] shadow-xl  py-[40px]">
        {/* text section */}
        <div className="">
          <h1 className="text-[30px] font-semibold text-black text-center">
            Our Clients
          </h1>
          <p className="text-[18px] text-black text-center">
            We have been working with some Fortune 500+ clients.
          </p>
        </div>

        {/* logo section */}
        <div
          className="justify-items-center gap-10 mt-10 
            grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-6  sm:grid-cols-6 shadow-xl py-[35px] "
        >
          {/* grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center */}
          <img src={logo_1} className="" alt="logo here" />
          <img src={logo_2} className="" alt="logo here" />
          <img src={logo_3} className="" alt="logo here" />
          <img src={logo_4} className="" alt="logo here" />
          <img src={logo_5} className="" alt="logo here" />
          <img src={logo_6} className="" alt="logo here" />
        </div>

        {/* Section here */}
        <section className=" py-[15px] sm:py-[30px] ">
          <div className=" my-[15px]  py-[40px]">
            <h1 className=" text-[18px] sm:text-[24px] text-center font-semibold ">
              Manage your entire community in a single system
            </h1>
            <p className="text-[14px] sm:text-[20px]  text-center">
              Who is Nextcent suitable for?
            </p>
          </div>

          <div className="grid justify-item-center gap-8 grid-cols-1 sm:grid-cols-3">
            <div className="card-1 grid place-content-center">
              <div className="flex justify-center">
                <MdGroups2 className="size-[50px] text-navbar" />
              </div>
              <h1 className="text-[20px] font-bold text-center">
                Membership Organisations
              </h1>
              <p className="text-[14px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="card-2 grid place-content-center">
              <div className="flex justify-center">
                <BsBuildings className="size-[50px] text-navbar " />
              </div>
              <h1 className="text-[20px] font-bold text-center">
                National Associations
              </h1>
              <p className="text-[14px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="card-3 grid place-content-center">
              <div className="flex justify-center items-center">
                {" "}
                <FaRegHandshake className="size-[50px] text-navbar " />
              </div>
              <h1 className="text-[20px] font-bold text-center">
                Clubs And Groups
              </h1>
              <p className="text-[14px] text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </section>
      </main>
     
     {/* Second section here */}

     {/* <div className="grid grid-cols-1"> */}
     <div className="grid  grid-cols-1 sm:grid-cols-2 py-0">

        {/* image here */}
        <div className="flex justify-center">
            <img src={rafiki} className="w-[350px] " alt="rafiki" />
        </div>

        {/* text here */}
        <div className="flex flex-col justify-center py-0  sm:px-[20px]">
            <h1 className="text-[30px] mt-[0px] sm:px-[20px] font-semibold text-black leading-7 mb-2 text-start">The unseen of spending three <br /> years at Pixelgrade</h1>
            <p className="text-[14px] text-black leading-5   mt-5 sm:mx-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. <br /> Sed accumsan quam vitae est varius fringilla.Pellentesque placerat vestibulum lorem  <br /> sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. <br /> Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        </div>
     </div>

    </div>
  );
};

export default Clients;
