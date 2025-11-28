import React from 'react';
import Banner from './Banner';
import Find3Partner from './Find3Partner';


const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto my-30'>
          <Banner></Banner>
          <Find3Partner></Find3Partner>
        </div>
    );
};

export default Home;