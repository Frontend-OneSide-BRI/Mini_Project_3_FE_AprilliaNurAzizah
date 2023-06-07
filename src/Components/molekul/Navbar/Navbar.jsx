import React from "react";
import Button from "../../atom/Button/Button";
import { Link } from "react-router-dom";
import Input from "../../atom/Input/Input";
import { BsSearch } from "react-icons/bs";

const Navbar = (props) => {
  const { title1, title2, title3, isLogin, isRegister, isSearch, isLogout } =
    props;

  return (
    <div className="flex items-center justify-between p-2 z-[100] w-full relative bg-gray-900">
      <Link to="/">
        <h1 className="text-2xl font-bold text-red-700 ms-3 cursor-pointer">
          AMOVIE
        </h1>
      </Link>
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
          <div className="flex items-center space-x-2 md:space-x-10">
            <ul className="hidden space-x-4 md:flex text-white cursor-pointer">
              <li className="headerLink">Home</li>
              <li className="headerLink">TV Shows</li>
              <li className="headerLink">Movies</li>
              <li className="headerLink">New & Popular</li>
              <li className="headerLink">My List</li>
            </ul>
            <Link to="/">
              <Button
                type=""
                title={title3}
                addClassName="bg-red-600 px-2 py-1 rounded cursor-pointer text-white"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
