import React from "react";
import { Modal } from "flowbite-react";
import { useLocation } from "react-router-dom";

const ModalMovie = ({ isShow, onClose, data }) => {
  const location = useLocation();
  return (
    <Modal show={isShow} onClose={onClose}>
      <Modal.Header>
        {location.pathname.includes("home") ||
        location.pathname.includes("movie") ||
        location.pathname.includes("search")
          ? data.title
          : data.original_name}
      </Modal.Header>
      <Modal.Body>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.original_name}
        />
        {data.release_date && (
          <p className=" text-gray-900 mt-4">
            Release Date: {data.release_date}
          </p>
        )}

        {data.overview && (
          <p className=" text-gray-900 mt-2">Overview: {data.overview}</p>
        )}

        {data.popularity && (
          <p className=" text-gray-900 mt-2">Popularity: {data.popularity}</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalMovie;
