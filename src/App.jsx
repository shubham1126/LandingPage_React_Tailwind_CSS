// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Clients from "./components/Clients/Clients.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Clients/>
      <Footer/>
    </div>
  );
};

export default App;
