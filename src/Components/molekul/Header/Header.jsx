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
    <div className="w-full h-[250px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-gray-900 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieImg}`}
          alt={`${movieTitle}`}
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 md:p-8 z-[100] text-left pl-5">
          <h1 className="text-3xl md:text-4xl font-bold pb-4">{`${movieTitle}`}</h1>
          <div className="my-4">
            <ButtonPlay
              type="button"
              addClassName="bg-red-700 text-black rounded cursor-pointer text-white cursor-pointer"
              title="Play"
            />
            <ButtonPlay
              type="button"
              addClassName="rounded bg-gray-300 ml-4 cursor-pointer"
              title="Watch"
            />
          </div>
          <p className="text-white text-sm">Released: {`${movieDate}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
