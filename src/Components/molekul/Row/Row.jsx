import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

const Row = (props) => {
  const { title, fetchURL } = props;
  const { data, isLoading, isError } = fetchURL();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (data && !isLoading && !isError) {
      setMovies(data.results);
    }
  }, [data, isLoading, isError]);

  const handleRowClick = (movie) => {
    setSelectedMovie(movie);
    console.log(selectedMovie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };
  
  return (
    <div className="bg-slate-950">
      <h2 className="text-white font-bold md:text-xl p-4 text-left">{title}</h2>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {movies &&
          movies.map((item, id) => (
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
              <h5 className="text-white">{item.title}</h5>
            </div>
          ))}
      </div>
      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Row;
