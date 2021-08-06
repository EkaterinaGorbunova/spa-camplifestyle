import React from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const logo = "/home.svg";

const styles = {
  linkNav:
    "px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-indigo-200 transition duration-300 ease-in-out",
  linkNavMobile:
    "block px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-indigo-200 transition duration-300 ease-in-out",
};

export const TopNavbar = () => {
  return (
    <>
      <Menu
        as="nav"
        className="sticky top-0 z-50 text-gray-300 bg-black font-inter"
      >
        {({ open }) => (
          <>
            <div className="px-2 mx-auto sm:px-6 lg:px-8 max-w-8xl">
              <div className="flex justify-between h-14">
                <div className="flex">
                  <div className="flex items-center pl-2 mr-2 -ml-2 md:hidden">
                    {/* Mobile menu icon */}
                    <Menu.Button className="inline-flex items-center justify-between p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <div className="flex items-center flex-shrink-0 invisible mr-2">
                    <a href="#" aria-label="logo-link">
                      <img
                        className="w-auto h-6 md:visible lg:block"
                        aria-hidden="true"
                        src={logo}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="hidden text-sm uppercase md:flex md:items-center md:ml-0 md:space-x-2">
                    <a href="#about" className={styles.linkNav}>
                      About
                    </a>
                    <a href="#traitsandspecies" className={styles.linkNav}>
                      Relax
                    </a>
                    <a href="#community" className={styles.linkNav}>
                      De-Stress
                    </a>
                    <a href="#roadmap" className={styles.linkNav}>
                      Roadtrip
                    </a>
                    <a href="#team" className={styles.linkNav}>
                      Team
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:flex md:flex-shrink-0 md:items-center">
                    <Menu as="div" className="relative">
                      <>
                        <div>
                          <a
                            href="#"
                            target="_blank"
                            className="inline-flex items-center px-12 py-2 text-sm font-normal text-white uppercase bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                          >
                            <span className="sr-only">MINT</span>
                            Join
                          </a>
                        </div>
                      </>
                    </Menu>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 mr-2 md:hidden">
                  <a href="#" aria-label="logo-link">
                    <img
                      className="inline-flex w-auto h-6 lg:block"
                      aria-hidden="true"
                      src={logo}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Dropdown mobile menu */}
            <Menu.Items className="md:hidden">
              <div className="px-1 pt-0 pb-4 space-y-1 uppercase sm:px-3">
                <div className="px-2 pt-2 pb-2 space-y-1">
                  <Menu.Item>
                    <a href="#about" className={styles.linkNavMobile}>
                      About
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#traitsandspecies"
                      className={styles.linkNavMobile}
                    >
                      Relax
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#community" className={styles.linkNavMobile}>
                    De-Stress
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#roadmap" className={styles.linkNavMobile}>
                    Roadtrip
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href="#team" className={styles.linkNavMobile}>
                      Team
                    </a>
                  </Menu.Item>
                </div>
                <Menu as="div" className="relative">
                  <Menu.Item>
                    <div className="px-4">
                      <a
                        href="#"
                        target="_blank"
                        className="px-2 py-1 text-sm font-normal text-white uppercase bg-green-600 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      >
                        <span className="sr-only">MINT</span>
                        Join
                      </a>
                    </div>
                  </Menu.Item>
                </Menu>
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </>
  );
};
