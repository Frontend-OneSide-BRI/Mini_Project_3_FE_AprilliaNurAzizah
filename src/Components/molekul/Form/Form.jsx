import React from "react";
import Input from "../../atom/Input/Input";
import Button from "../../atom/Button/Button";
import { Link } from "react-router-dom";

const Form = (props) => {
  const { className, titleButton, titleSpan, titleLink, path, onChange, onSubmit} =
    props;
  return (
    <form className={`${className}`} onSubmit={onSubmit}>
      <Input
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="username"
        addClassName=" p-3 my-2 bg-gray-700 rounded"
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        addClassName=" p-3 my-2 bg-gray-700 rounded"
        onChange={onChange}
      />
      <Button
        title={titleButton}
        addClassName="bg-red-600 py-3 my-6 rounded font-bold"
      />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <p>
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <p>Need Help?</p>
      </div>
      <p className="py-8">
        <span className="text-gray-600">{titleSpan}</span>{" "}
        <Link to={path}>{titleLink}</Link>
      </p>
    </form>
  );
};

export default Form;
