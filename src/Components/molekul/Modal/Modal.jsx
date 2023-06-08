import React from "react";

const Modal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4 md:p-8 text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Popularity: {movie.popularity}</p>
        <button
          className=" bg-slate-800 text-white px-4 py-2 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
