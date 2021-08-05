import React from 'react';

export const About = () => {
  return (
    <div id='about'>
      <div className='flex flex-wrap items-center justify-center h-full py-12 lg:py-24'>
        <div className='mx-auto text-center max-w-3xl min-h-5xl pb-8 md:pb-10'>
          <h2 className='text-2xl md:text-4xl px-4 py-4 font-inter text-center font-extrabold text-gray-100 uppercase'>
            Welcome to the anuran dojo
          </h2>
          <p className='text-base md:text-lg px-4 pt-4 font-inter leading-tight text-center text-indigo-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec. Ac euismod vel sit maecenas id pellentesque
            eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.Ac
            euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className='w-full px-0 mx-auto my-auto'>
          <section className='px-4 py-8'>
            <div className='flex flex-wrap md:flex-nowrap justify-center -mx-4 -mb-8'>
              <div className='w-4/6 px-4 mb-8 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk2-about.png'
                  alt='NFT_Monk2-about'
                />
              </div>
              <div className='w-4/6 px-4 mb-8 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk3-about.png'
                  alt='NFT_Monk3-about'
                />
              </div>
              <div className='w-4/6 px-4 mb-8 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk1-about.png'
                  alt='NFT_Monk1-about'
                />
              </div>
              <div className='w-4/6 px-4 mb-8 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk4-about.png'
                  alt='NFT_Monk4-about'
                />
              </div>
              <div className='w-4/6 px-4 mb-8 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk5-about.png'
                  alt='NFT_Monk5-about'
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
