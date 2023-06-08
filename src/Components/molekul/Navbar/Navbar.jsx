import React from "react";
import Button from "../../atom/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../../atom/Input/Input";
import { IoMdHand } from "react-icons/io";

const Navbar = (props) => {
  const { title1, title2, title3, isLogin, isRegister, isSearch, isLogout } =
    props;

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("credential");
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between p-2 z-[100] w-full relative bg-gray-900">
      <Link to="/">
        <h1 className="text-2xl font-bold text-red-700 ms-3 cursor-pointer">
          AMOVIE
        </h1>
      </Link>
      {isLogout && (
        <h2 className="text-white font-bold text-lg flex items-center">
          Hi,{" "}
          {localStorage.getItem("credential")
            ? JSON.parse(localStorage.getItem("credential")).username
            : ""}
          <IoMdHand className="align-middle pt-2" />
        </h2>
      )}
      <div>
        {isLogin && (
          <Link to="/login">
            <Button type="" title={title1} addClassName="text-white pr-4" />
          </Link>
        )}
        {isRegister && (
          <Link to="/register">
            <Button
              type=""
              title={title2}
              addClassName="bg-red-600 px-3 py-1 rounded cursor-pointer text-white"
            />
          </Link>
        )}
        {isSearch && (
          <div className="flex items-center justify-center flex-grow">
            <Input
              type="text"
              name="search"
              placeholder="Search in here..."
              addClassName="rounded h-7 w-full item-center"
            />
          </div>
        )}
        {isLogout && (
          <div className="flex items-center justify-between space-x-2 md:space-x-10">
            <ul className="hidden space-x-4 md:flex text-white cursor-pointer pr-4">
              <Link to="/home">
                <li className="headerLink">Home</li>
              </Link>
              <Link to="/tvshow">
                <li className="headerLink">TV Shows</li>
              </Link>
              <Link to="/movie">
                <li className="headerLink">Movies</li>
              </Link>
            </ul>
            <Button
              type=""
              title={title3}
              addClassName="bg-red-600 px-2 py-1 rounded cursor-pointer text-white"
              onClick={handleClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
