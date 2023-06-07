import React from "react";
import Button from "../../atom/Button/Button";
import { Link } from "react-router-dom";
import Input from "../../atom/Input/Input";

const Navbar = (props) => {
  const { title1, title2, title3, isLogin, isRegister, isSearch, isLogout } =
    props;

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full relative bg-gray-900">
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
              addClassName="bg-red-600 px-4 py-2 rounded cursor-pointer text-white"
            />
          </Link>
        )}
        {isSearch && (
          <Input
            type="text"
            name="search"
            placeholder="Search in here..."
            addClassName="pr-4"
          />
        )}
        {isLogout && (
          <Link to="/">
            <Button
              type=""
              title={title3}
              addClassName="bg-red-600 px-4 py-2 rounded cursor-pointer text-white"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
