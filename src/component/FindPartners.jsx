import React, { use, useEffect, useState } from 'react';
import Find3PartnerCard from '../Home/Find3PartnerCard';
import AuthContext from '../AuthContext/AuthContext';
//const findPartnersPromise = fetch('http://localhost:3000/allpartners').then(res=>res.json())

const FindPartners = () => {
    //const allPartners = use(findPartnersPromise)
    const {reload} = use(AuthContext)

    const [allPartners,setAllPartners] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/allpartners')
        .then(res=>res.json())
        .then(data=>{
            setAllPartners(data)
        })
    },[reload])
    return (
         <div>
           
            <h1 className='text-primary text-center font-bold text-3xl underline'>All Study Partner :<span className='text-secondary'>({allPartners.length})</span></h1>
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
               {
                allPartners.map(partner=><Find3PartnerCard key={partner._id} partner={partner}></Find3PartnerCard>)
            }
         </div>

        </div>
    );
};

export default FindPartners;