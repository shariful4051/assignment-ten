import React from 'react';
import Marquee from 'react-fast-marquee';
import threeBoy from '../assets/three boys.jpg'
import online from '../assets/online pic.jpg'
import twoBoy from '../assets/offline learn.avif'
const Banner = () => {
    return (
         <div className='bg-blue-200 rounded-md'>
            <Marquee className='flex'>
                <img className='h-[250px] w-[300px] rounded-md' src={threeBoy} alt="" />
                <img className='h-[250px] w-[300px] rounded-md' src={online} alt="" />
                <img className='h-[250px] w-[300px] rounded-md' src={twoBoy} alt="" />
            </Marquee>
        </div>
    );
};

export default Banner;