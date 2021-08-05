import React from 'react'
import Image from 'next/image';
import banner from '../public/banner-anura.png';

export const Banner = () => {
    return(
        <div className='relative w-full h-full'>
          <Image
            className='object-cover object-top relative bg-black'
            src={banner}
            width={1920}
            height={690}
            alt='anura banner'
          />
        </div>
    )
}