import React, { use } from 'react';
import Banner from './Banner';
import Find3Partner from './Find3Partner';

//const allPartnerPromise = fetch('https://study-mate-server-blond.vercel.app/highRating').then(res=>res.json())


const Home = () => {
 // const allPartners = use(allPartnerPromise)
  
    return (
        <div className='max-w-[1140px] mx-auto my-5'>
          <Banner></Banner>
          <Find3Partner></Find3Partner>
          {/* <Find3Partner allPartners={allPartners}></Find3Partner> */}
        </div>
    );
};

export default Home;