import React from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Footer from "../../Components/molekul/Footer/Footer";
import Row from "../../Components/molekul/Row/Row";
import { useGetMovieSearchQuery } from "../../service/movieApi";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  return (
    <div className=" bg-slate-950">
      <Navbar title3="Sign Out" isLogout={true} />
      <Row fetchURL={useGetMovieSearchQuery} keyword={keyword} />
      <Footer />
    </div>
  );
};

export default Search;
