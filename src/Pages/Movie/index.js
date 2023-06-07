import React, { useState, useEffect } from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import {
  useGetMoviesQuery,
  useGetPopularMoviesQuery,
} from "../../service/movieApi";
import Footer from "../../Components/molekul/Footer/Footer";
import ButtonPlay from "../../Components/atom/Button/ButtonPlay";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const [movieImg, setMovieImg] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      setMovies(data.results);
    }
  }, [data, isLoading]);

  let movie = null;

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      movie = movies[randomIndex];
      setMovieImg(movie.backdrop_path);
    }
  }, [movies]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <Navbar title3="Sign Out" isLogout={true}/>
      <div className="w-full h-[600px] text-white relative">
        <div className="absolute w-full h-full bg-gradient-to-r from-black z-10"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieImg}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 items-start text-left">
          <ButtonPlay
            type="button"
            className="border bg-red-700 text-black border-gray-300 cursor-pointer"
            title="Play"
            style={{ position: "relative", zIndex: 100 }}
          />
          <ButtonPlay
            type="button"
            className="border bg-gray-300 border-gray-300 ml-4"
            title="Watch"
            style={{ position: "relative", zIndex: 100 }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
