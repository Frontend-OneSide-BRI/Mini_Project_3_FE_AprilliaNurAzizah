import React, { useEffect, useState } from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Footer from "../../Components/molekul/Footer/Footer";
import Header from "../../Components/molekul/Header/Header";
import {
  useGetMovieTopRatedQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
  useGetPopularMoviesQuery,
} from "../../service/movieApi";
import Row from "../../Components/molekul/Row/Row";
import { useLocation } from "react-router-dom";
import SearchBar from "../../Components/molekul/SearchBar/SearchBar";

const Movie = () => {
  const location = useLocation();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    let newRows = [];
    if (
      location.pathname.includes("home") ||
      location.pathname.includes("movie")
    ) {
      newRows = [
        { title: "Popular Movie", fetchURL: useGetPopularMoviesQuery },
        { title: "Top Movie Rated", fetchURL: useGetMovieTopRatedQuery },
      ];
    }

    if (location.pathname.includes("tvshow")) {
      newRows = [
        { title: "Popular TV Show", fetchURL: useGetTvPopularQuery },
        { title: "Top Rated TV Show", fetchURL: useGetTvTopRatedQuery },
      ];
    }

    setRows(newRows);
  }, [location.pathname]);

  return (
    <div className=" bg-slate-950">
      <Navbar title3="Sign Out" isLogout={true} />
      <Header />
      <h1 className=" text-white mt-5 mb-3 text-2xl">
        Search your movie here!
      </h1>
      <SearchBar />
      {rows.map((row, index) => (
        <Row
          key={index}
          rowID={index.toString()}
          title={row.title}
          fetchURL={row.fetchURL}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Movie;
