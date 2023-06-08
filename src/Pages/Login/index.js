import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import Form from "../../Components/molekul/Form/Form";
import { credential } from "../../Const/AuthDummy";

const Login = () => {
  const navigate = useNavigate();

  const [payload, setPayload] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    if (
      payload.username === credential.username &&
      payload.password === credential.password
    ) {
      const data = JSON.stringify({ username: payload.username });
      localStorage.setItem("credential", data);
      navigate("/home");
    } else {
      alert("username atau password salah!");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <Form
              className="w-full flex flex-col py-4"
              titleButton="Sign In"
              titleSpan="New to Netflix?"
              titleLink="Sign Up"
              path="/signup"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
