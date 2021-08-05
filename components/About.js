import React from 'react';

export const About = () => {
  return (
    <div id='about'>
      <div className='flex flex-wrap justify-center items-center py-12 h-full lg:py-24'>
        <div className='pb-8 mx-auto max-w-3xl text-center md:pb-10 min-h-5xl'>
          <h2 className='py-4 px-4 text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter'>
            Welcome to the anuran dojo
          </h2>
          <p className='px-4 pt-4 text-base leading-tight text-center text-indigo-200 md:text-lg font-inter'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec. Ac euismod vel sit maecenas id pellentesque
            eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.Ac
            euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className='px-0 my-auto mx-auto w-full'>
          <section className='py-8 px-4'>
            <div className='flex flex-wrap justify-center -mx-4 -mb-8 md:flex-nowrap'>
              <div className='px-4 mb-8 w-4/6 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk2-about.png'
                  alt='NFT_Monk2-about'
                />
              </div>
              <div className='px-4 mb-8 w-4/6 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk3-about.png'
                  alt='NFT_Monk3-about'
                />
              </div>
              <div className='px-4 mb-8 w-4/6 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk1-about.png'
                  alt='NFT_Monk1-about'
                />
              </div>
              <div className='px-4 mb-8 w-4/6 md:w-1/4'>
                <img
                  className='mx-auto rounded shadow-md'
                  src='/NFT_Monk4-about.png'
                  alt='NFT_Monk4-about'
                />
              </div>
              <div className='px-4 mb-8 w-4/6 md:w-1/4'>
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
