import React, { use } from 'react';
import Find3PartnerCard from '../Home/Find3PartnerCard';
const findPartnersPromise = fetch('http://localhost:3000/allpartners').then(res=>res.json())

const FindPartners = () => {
    const allPartners = use(findPartnersPromise)
    return (
         <div>
           
            <h1 className='text-primary text-center font-bold text-3xl underline'>All Study Partner</h1>
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
               {
                allPartners.map(partner=><Find3PartnerCard key={partner._id} partner={partner}></Find3PartnerCard>)
            }
         </div>

        </div>
    );
};

export default FindPartners;