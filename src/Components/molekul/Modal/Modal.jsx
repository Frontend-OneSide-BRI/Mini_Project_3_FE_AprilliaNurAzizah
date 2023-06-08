import React from "react";
import { Modal } from "flowbite-react";
import { useLocation } from "react-router-dom";

const ModalMovie = ({ isShow, onClose, data }) => {
  const location = useLocation();
  return (
    <Modal show={isShow} onClose={onClose}>
      <Modal.Header>
        {location.pathname.includes("home") ? data.title : data.original_name}
      </Modal.Header>
      <Modal.Body>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.original_name}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalMovie;
