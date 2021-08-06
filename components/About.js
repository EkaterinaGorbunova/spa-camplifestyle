import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="flex flex-wrap items-center justify-center h-full py-12 lg:py-24">
        <div className="max-w-6xl pb-8 mx-auto text-center md:pb-10 min-h-5xl">
          <h2 className="px-4 py-4 text-2xl font-extrabold text-center text-gray-100 uppercase md:text-5xl font-inter">
            Take a break
          </h2>
          <p className="px-4 pt-4 text-lg leading-tight text-center text-indigo-200 md:text-3xl font-inter">
            Are you glued to a phone, computer, tablet or other screen for most
            of the day?
            <br /> It’s time to take a break, unplug and head outdoors.
          </p>
        </div>
        <div className="w-full px-0 mx-auto my-auto">
          <section className="px-4 py-8 text-gray-100">
            <div className="flex flex-wrap justify-center -mx-4 -mb-8 md:flex-nowrap">
              <div className="w-4/6 px-4 mb-8 md:w-1/4">
                <img
                  className="mx-auto rounded shadow-md"
                  src="/1-about-gallery.jpg"
                  alt="1-foto-about-gallery"
                />
              </div>
              <div className="w-4/6 px-4 mb-8 md:w-1/4">
                <img
                  className="mx-auto rounded shadow-md"
                  src="/3-about-gallery.jpg"
                  alt="3-foto-about-gallery"
                />
              </div>
              <div className="w-4/6 px-4 mb-8 md:w-1/4">
                <img
                  className="mx-auto rounded shadow-md"
                  src="/4-about-gallery.jpg"
                  alt="4-foto-about-gallery"
                />
              </div>
              <div className="w-4/6 px-4 mb-8 md:w-1/4">
                <img
                  className="mx-auto rounded shadow-md"
                  src="/5-about-gallery.jpg"
                  alt="5-about-gallery-foto"
                />
              </div>
              <div className="w-4/6 px-4 mb-8 md:w-1/4">
                <img
                  className="mx-auto rounded shadow-md"
                  src="/6-about-gallery.jpg"
                  alt="6-foto-about-gallery"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
