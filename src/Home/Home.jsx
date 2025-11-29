import React, { use } from 'react';
import Banner from './Banner';
import Find3Partner from './Find3Partner';

const allPartnerPromise = fetch('http://localhost:3000/highRating').then(res=>res.json())


const Home = () => {
  const allPartners = use(allPartnerPromise)
  console.log(allPartners);
    return (
        <div className='max-w-[1140px] mx-auto my-30'>
          <Banner></Banner>
          <Find3Partner allPartners={allPartners}></Find3Partner>
        </div>
    );
};

export default Home;