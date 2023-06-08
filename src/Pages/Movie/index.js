import React, { useState, useEffect } from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Footer from "../../Components/molekul/Footer/Footer";
import Header from "../../Components/molekul/Header/Header";
import {
  useGetUpComingQuery,
  useGetPopularMoviesQuery,
  useGetTrendingQuery,
  useGetTopRatedQuery,
} from "../../service/movieApi";
import Row from "../../Components/molekul/Row/Row";

const Movie = () => {
  return (
    <div className=" bg-slate-950">
      <Navbar title3="Sign Out" isLogout={true} />
      <Header />
      <Row rowID="1" title="Popular" fetchURL={useGetPopularMoviesQuery} />
      <Row rowID="2" title="Top Rated" fetchURL={useGetTopRatedQuery} />
      <Footer />
    </div>
  );
};

export default Movie;
