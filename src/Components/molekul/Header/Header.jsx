import React, { useState, useEffect } from "react";
import { useGetPopularMoviesQuery } from "../../../service/movieApi";
import ButtonPlay from "../../atom/Button/ButtonPlay";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const [movieImg, setMovieImg] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieDate, setMovieDate] = useState([]);

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
      console.log(movie);
      setMovieImg(movie.backdrop_path);
      setMovieTitle(movie.title);
      setMovieDate(movie.release_date);
    }
  }, [movies]);

  return (
    <div className="w-full h-[550px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black z-10"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieImg}`}
          alt={`${movieTitle}`}
        />
        <div className="absolute w-full top-[30%] p-4 md:p-8 text-left z-[100]">
          <h1 className="text-2xl md:text-3xl font-bold">{`${movieTitle}`}</h1>
          <div className="my-4">
            <ButtonPlay
              type="button"
              addClassName=" bg-red-700 text-black rounded cursor-pointer text-white"
              title="Play"
              style={{ position: "relative", zIndex: 100 }}
            />
            <ButtonPlay
              type="button"
              addClassName=" rounded  bg-gray-300  ml-4 cursor-pointer"
              title="Watch"
              style={{ position: "relative", zIndex: 100 }}
            />
          </div>
          <p className="text-gray-400 text-sm">Released: {`${movieDate}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
