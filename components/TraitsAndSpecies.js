import React from 'react';

export const TraitsAndSpecies = () => {
  return (
    <div id='traitsandspecies'>
      <div className='flex flex-wrap-reverse justify-center items-center py-12 h-full lg:py-22'>
        <div className='p-6 max-w-lg md:max-w-4xl'>
          <img
            className='mx-auto rounded shadow-md'
            src='/NFT_Monk2-traits-and-species.png'
            alt='NFT_Monk2-traits-and-species'
          />
        </div>
        <div className='p-4 space-y-6 max-w-lg md:p-6 md:max-w-3xl'>
          <h2 className='text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter'>
            Traits and species
          </h2>
          <p className='text-lg leading-tight text-center text-indigo-200 font-inter'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
      </div>
    </div>
  );
};
