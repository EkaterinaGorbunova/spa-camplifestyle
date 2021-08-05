import React from 'react';

export const Community = () => {
  return (
    <div id='community'>
      <div className='flex flex-wrap items-center justify-center h-full py-12 lg:py-24'>
        <div className='max-w-lg p-4 md:max-w-3xl md:p-6 space-y-6'>
          <h2 className='text-2xl md:text-4xl font-inter text-center font-extrabold text-gray-100 uppercase'>
            Community
          </h2>
          <p className='text-lg font-inter leading-tight text-center text-indigo-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className='max-w-lg p-6 md:max-w-4xl'>
          <img
            className='mx-auto rounded shadow-md'
            src='/NFT_Monk1-community.png'
            alt='NFT_Monk1-community'
          />
        </div>
      </div>
    </div>
  );
};
