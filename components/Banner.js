import React from 'react'
const banner = '/1.jpg'

export const Banner = () => {
    return(
        <div className='relative w-full h-full'>
          <img
            className='relative object-cover object-top bg-black'
            src={banner}
            
            alt='anura banner'
          />
        </div>
    )
}