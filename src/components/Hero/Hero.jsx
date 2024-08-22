// import React from 'react'
import hero_image from "/assets/images/illustration.png";

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[450px] flex item-center">
        {/* hero section image here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
          <div className="hero_image">
            {" "}
            <img src={hero_image} className=" w-[300px]" alt="hero image here" />
          </div>

          {/* hero section content here */}
          <div className="hero-text">
            <h1 className="text-[52px] font-bold">
              Lessons and insights from 8 years
            </h1>
            <div className="grid grid-col">
                <input type="mail" className="bg-grey w-[300px] shadow-lg border-[2px] border-black rounded-lg my-3 text-white font-bold p-[5px]" name="" id="" placeholder="Enter Your Mail" />
                <button className="bg-navbar w-[140px] rounded-lg my-3 text-white font-bold p-[5px]">Register</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
