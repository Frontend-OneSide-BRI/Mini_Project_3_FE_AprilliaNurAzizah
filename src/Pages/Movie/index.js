import React from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import { useGetMoviesQuery } from "../../service/movieApi";

const Movie = () => {
  const { data, isLoading, error } = useGetMoviesQuery();
  return (
    <div>
      {!isLoading && console.log(data)}
      <Navbar title3="Sign Out" isLogout={true} />
    </div>
  );
};

export default Movie;
