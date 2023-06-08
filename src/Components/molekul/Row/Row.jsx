import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useLocation } from "react-router-dom";

const Row = (props) => {
  const { title, fetchURL } = props;
  const { data, isLoading, isError } = fetchURL();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (data && !isLoading && !isError) {
      setMovies(data.results);
    }
  }, [data, isLoading, isError]);

  const handleRowClick = (movie) => {
    setSelectedMovie(movie);
    setIsShow(!isShow);
  };


  console.log(movies);


  return (
    <div className="bg-slate-950">
      <h2 className="text-white font-bold text-2xl p-4 text-left">{title}</h2>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {movies.map((item, id) => (
          <div
            className="grid grid-rows-3"
            key={id}
            onClick={() => handleRowClick(item)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="img-blur-shadow"
              layout="fill"
              className="p-5 cursor-pointer"
            />
            <h5 className="text-white">
              {location.pathname.includes("home") ||
              location.pathname.includes("movie")
                ? item.title
                : item.original_name}
            </h5>
          </div>
        ))}
      </div>
      <Modal
        isShow={isShow}
        onClose={() => setIsShow(false)}
        data={selectedMovie}
      />
    </div>
  );
};

export default Row;
