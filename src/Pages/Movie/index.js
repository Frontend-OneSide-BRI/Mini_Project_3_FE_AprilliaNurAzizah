import React, { useMemo } from "react";
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

const Movie = () => {
  const location = useLocation();

  const row1 = useMemo(() => {
    if (
      location.pathname.includes("home") ||
      location.pathname.includes("movie")
    ) {
      return { title: "Popular Movie", fetchURL: useGetPopularMoviesQuery };
    }

    if (location.pathname.includes("tvshow")) {
      return { title: "Popular TV Show", fetchURL: useGetTvPopularQuery };
    }
  }, [location.pathname]);

  const row2 = useMemo(() => {
    if (
      location.pathname.includes("home") ||
      location.pathname.includes("movie")
    ) {
      return { title: "Top Movie Rated", fetchURL: useGetMovieTopRatedQuery };
    }

    if (location.pathname.includes("tvshow")) {
      return { title: "Top Rated Tv Show", fetchURL: useGetTvTopRatedQuery };
    }
  }, [location.pathname]);

  return (
    <div className=" bg-slate-950">
      <Navbar title3="Sign Out" isLogout={true} />
      <Header />
      <Row rowID="1" title={row1.title} fetchURL={row1.fetchURL} />
      <Row rowID="2" title={row2.title} fetchURL={row2.fetchURL} />
      <Footer />
    </div>
  );
};

export default Movie;
