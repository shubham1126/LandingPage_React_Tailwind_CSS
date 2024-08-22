// import React from 'react'
import hero_image from '/assets/images/illustration.png'

const Hero = () => {
  return (
    <div>
        <main className="container">
            {/* hero section content here */}
            <div className="hero-text">
            <h1 className='text-[52px] font-bold'>Lessons and insights from 8 years</h1>
            </div>

            {/* hero section image here */}
            <div className="grid grid-cols-1">
                <img src={hero_image} alt="hero image here" />
            </div>
        </main>
    </div>
  )
}

export default Hero
  