import React from "react";
const banner = "/banner.png";

export const Banner = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <img
          className="relative object-cover object-center h-screen bg-black"
          src={banner}
          alt="banner"
        />
      </div>
      <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-50"></div>
      <div
        data-aos="flip-down"
        class="absolute inset-0 z-30 container flex flex-col items-center justify-center h-full max-w-7xl pl-0 mx-auto sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
      >
        <div class="flex flex-col items-center justify-center mx-auto uppercase">
          <div class="relative text-center p-2">
            <h1 class="text-white relative mb-4 text-4xl font-bold font-sans italic leading-none text-center md:text-7xl lg:text-8xl">
              {" "}
              Relax in Nature
              <br />
              <span class="text-red-500">and Stress Less</span>
            </h1>
            <p class="text-gray-400 text-sm lg:text-4xl lg:text-center font-sans italic">
            Camping LifeStyle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
