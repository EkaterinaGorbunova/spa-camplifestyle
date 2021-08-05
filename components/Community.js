import React from 'react';

export const Community = () => {
  return (
    <div id='community'>
      <div className='flex flex-wrap justify-center items-center py-12 h-full lg:py-24'>
        <div className='p-4 space-y-6 max-w-lg md:p-6 md:max-w-3xl'>
          <h2 className='text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter'>
            Community
          </h2>
          <p className='text-lg leading-tight text-center text-indigo-200 font-inter'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className='p-6 max-w-lg md:max-w-4xl'>
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
