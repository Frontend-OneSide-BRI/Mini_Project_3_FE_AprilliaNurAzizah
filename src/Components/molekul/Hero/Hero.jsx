import React from "react";
import Button from "../../atom/Button/Button";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] text-white items-center">
      <div className="relative">
        <img
          className="w-full h-[20%]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/61d29cb2-7944-4dc7-bcac-7298f9cfb431/ID-en-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center ">
          <h1 className=" text-2xl md:text-5xl font-bold text-center ">
            Unlimited Movie, TV shows and more
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
