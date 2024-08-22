// import React from 'react'

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className=" container mx-auto flex  justify-between items-center p-4 bg-navbar   ">
        <h1 className="text-black text-3xl font-semibold">Logo</h1>

        <ul className="flex gap-6">
            <li className="font-semibold text-white text-lg"><a href="#" className="hover:text-blue-900">Home</a>{" "}</li>
            <li className="font-semibold text-white text-lg"><a href="#" className="hover:text-blue-900">Features</a>{" "}</li>
            <li className="font-semibold text-white text-lg"><a href="#" className="hover:text-blue-900">Community</a>{" "}</li>
            <li className="font-semibold text-white text-lg"><a href="#" className="hover:text-blue-900">Blog</a>{" "}</li>
            <li className="font-semibold text-white text-lg"><a href="#" className="hover:text-blue-900">Contact</a>{" "}</li>

        </ul>   

        <button className="bg-inherit flex justify-end"> Register Now
        </button>
      </nav>
    </div>
  )
}

export default Navbar
