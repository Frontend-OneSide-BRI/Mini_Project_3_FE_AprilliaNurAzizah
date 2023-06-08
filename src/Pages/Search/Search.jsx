import React from "react";
import Navbar from "../../Components/molekul/Navbar/Navbar";
import Footer from "../../Components/molekul/Footer/Footer";
import Row from "../../Components/molekul/Row/Row";
import { useGetMovieSearchQuery } from "../../service/movieApi";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, loading } = useGetMovieSearchQuery(keyword);

  return (
    <div className=" bg-slate-950 h-screen">
      <Navbar title3="Sign Out" isLogout={true} />
      {loading ? (
        <p>Loading...</p>
      ) : data && data.results.length > 0 ? (
        <Row fetchURL={useGetMovieSearchQuery} keyword={keyword} />
      ) : (
        <div className=" bg-gray-800 w-full h-full flex items-center justify-center">
          <p className=" text-white ">Movie is not found</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Search;
