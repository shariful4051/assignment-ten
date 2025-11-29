import React from 'react';
import Find3PartnerCard from './Find3PartnerCard';

const Find3Partner = ({allPartners}) => {
    
    return (
        <div>
           
            <h1 className='text-primary text-center font-bold text-3xl underline'>Top Study Partner</h1>
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
               {
                allPartners.map(partner=><Find3PartnerCard key={partner._id} partner={partner}></Find3PartnerCard>)
            }
         </div>

        </div>
    );
};

export default Find3Partner;