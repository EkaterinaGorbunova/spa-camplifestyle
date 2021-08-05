import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import logo from '../public/logo.png'

// const logo = '/logo.png';

const styles = {
  linkNav:
    'px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-indigo-200 transition duration-300 ease-in-out',
  linkNavMobile:
    'block px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-indigo-200 transition duration-300 ease-in-out',
};

export const TopNavbar = () => {
  return (
    <>
      <Menu
        as='nav'
        className='bg-black text-gray-300 font-inter sticky top-0 z-50'
      >
        {({ open }) => (
          <>
            <div className='px-2 mx-auto max-w-8xl sm:px-6 lg:px-8'>
              <div className='flex justify-between h-14'>
                <div className='flex'>
                  <div className='flex items-center pl-2 mr-2 -ml-2 md:hidden'>
                    {/* Mobile menu button */}
                    <Menu.Button className='inline-flex items-center justify-between p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block w-6 h-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block w-6 h-6'
                          aria-hidden='true'
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <div className='invisible flex items-center flex-shrink-0 mr-2'>
                    <a href='#' aria-label='logo-link'>
                      <Image
                        className='md:visible w-auto h-8 lg:block'
                        aria-hidden='true'
                        src={logo}
                        width={30}
                        height={30}
                        alt='logo'
                      />
                    </a>
                  </div>
                  <div className='hidden text-sm md:ml-0 md:flex md:items-center md:space-x-2 uppercase'>
                    <a href='#about' className={styles.linkNav}>
                      About
                    </a>
                    <a href='#traitsandspecies' className={styles.linkNav}>
                      Traits &amp; Species
                    </a>
                    <a href='#community' className={styles.linkNav}>
                      Community
                    </a>
                    <a href='#roadmap' className={styles.linkNav}>
                      Roadmap
                    </a>
                    <a href='#team' className={styles.linkNav}>
                      Team
                    </a>
                    {/* <Link to='/about' className={styles.linkNav}>
                      About
                    </Link>
                    <Link to='/traitsandspecies' className={styles.linkNav}>
                      Traits &amp; Species
                    </Link>
                    <Link to='/community' className={styles.linkNav}>
                      Community
                    </Link>
                    <Link to='/roadmap' className={styles.linkNav}>
                      Roadmap
                    </Link>
                    <Link to='#team' className={styles.linkNav}>
                      Team
                    </Link> */}
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='hidden md:flex-shrink-0 md:flex md:items-center'>
                    <Menu as='div' className='relative'>
                      <>
                        <div>
                          <button
                            type='button'
                            className='inline-flex items-center px-12 py-2 border border-transparent text-sm font-normal rounded-md text-white bg-green-600 hover:bg-green-700 uppercase'
                            onClick={() => (window.location.href = '#')}
                          >
                            <span className='sr-only'>MINT</span>
                            Mint
                          </button>
                        </div>
                      </>
                    </Menu>
                  </div>
                </div>
                <div className='md:hidden flex items-center flex-shrink-0 mr-2'>
                  <a href='#' aria-label='logo-link'>
                    <Image
                      className='inline-flex w-auto h-6 lg:block'
                      aria-hidden='true'
                      src={logo}
                      width={25}
                      height={25}
                      alt='logo'
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Dropdown mobile menu */}
            <Menu.Items className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  <Menu.Item>
                    <a href='#' className={styles.linkNavMobile}>
                      Home
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='#about' className={styles.linkNavMobile}>
                      About
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href='#traitsandspecies'
                      className={styles.linkNavMobile}
                    >
                      Traits &amp; Species
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='#community' className={styles.linkNavMobile}>
                      Community
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='#roadmap' className={styles.linkNavMobile}>
                      Roadmap
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='#team' className={styles.linkNavMobile}>
                      Team
                    </a>
                  </Menu.Item>
                </div>
                {/* <ul className='px-2 pt-2 pb-3 space-y-1'>
                  <li>
                    <Link to='/' className={styles.linkNavMobile}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/about' className={styles.linkNavMobile}>About</Link>
                  </li>
                  <li>
                    <Link to='/traitsandspecies' className={styles.linkNavMobile}>Traits &amp; Species</Link>
                  </li>
                  <li>
                    <Link to='/community' className={styles.linkNavMobile}>Community</Link>
                  </li>
                  <li>
                    <Link to='/roadmap' className={styles.linkNavMobile}>Roadmap</Link>
                  </li>
                  <li>
                    <Link to='/team' className={styles.linkNavMobile}>Team</Link>
                  </li>
                </ul> */}
                <Menu as='div' className='relative'>
                  <Menu.Item>
                    <div className='px-4'>
                      <button
                        type='button'
                        className='block px-3 text-sm font-normal text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white uppercase'
                        onClick={() => (window.location.href = '#')}
                      >
                        <span className='sr-only'>MINT</span>
                        Mint
                      </button>
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
