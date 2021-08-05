import React from 'react';

export const TraitsAndSpecies = () => {
  return (
    <div id='traitsandspecies'>
      <div className='flex flex-wrap-reverse items-center justify-center h-full py-12 lg:py-22'>
        <div className='max-w-lg p-6 md:max-w-4xl'>
          <img
            className='mx-auto rounded shadow-md'
            src='/NFT_Monk2-traits-and-species.png'
            alt='NFT_Monk2-traits-and-species'
          />
        </div>
        <div className='max-w-lg p-4 md:max-w-3xl md:p-6 space-y-6'>
          <h2 className='text-2xl md:text-4xl font-inter text-center font-extrabold text-gray-100 uppercase'>
            Traits and species
          </h2>
          <p className='text-lg font-inter leading-tight text-center text-indigo-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
      </div>
    </div>
  );
};
