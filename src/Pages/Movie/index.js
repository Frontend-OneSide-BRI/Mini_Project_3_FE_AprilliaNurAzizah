import React, { useState, useEffect } from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Footer from "../../Components/molekul/Footer/Footer";
import Header from "../../Components/molekul/Header/Header";

const Movie = () => {
  return (
    <div>
      <Navbar title3="Sign Out" isLogout={true} />
      <Header />
      <Footer />
    </div>
  );
};

export default Movie;
