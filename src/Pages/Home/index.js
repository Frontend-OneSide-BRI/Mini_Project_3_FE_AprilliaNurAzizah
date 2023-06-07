import React from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Hero from "../../Components/molekul/Hero/Hero";
import Story from "../../Components/molekul/Story/Story";
import Footer from "../../Components/molekul/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar title1="Sign In" title2="Sign Up" isLogin={true} isRegister={true}/>
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
