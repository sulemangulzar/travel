import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[300px] bg-blue-500">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-4 pt-24">
          <div>
            <h1 className="gradient-text text-3xl md:text-5xl font-custom font-bold">
              Your Adventure Awaits
            </h1>
            <p className="w-[330px] md:w-full text-base tracking-wider text-center font-medium font-custom text-white">
              Travel Smart: Book Flights and Hotels Together.
            </p>
          </div>
          <div>
            <img alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
