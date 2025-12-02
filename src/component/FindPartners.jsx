import React, { use, useEffect, useState } from 'react';
import Find3PartnerCard from '../Home/Find3PartnerCard';
import AuthContext from '../AuthContext/AuthContext';
import Loding from './Loding';
//const findPartnersPromise = fetch('https://study-mate-server-blond.vercel.app/allpartners').then(res=>res.json())

const FindPartners = () => {
    //const allPartners = use(findPartnersPromise)
    const {reload,loding} = use(AuthContext)

    const [allPartners,setAllPartners] = useState([])

    const [search,setSearch]= useState('')
    const term = search.trim().toLocaleLowerCase()
   const searchPartners = term?allPartners.filter(partner=>partner.subject.toLocaleLowerCase().includes(term)):allPartners    
  

    useEffect(()=>{
        fetch('https://study-mate-server-blond.vercel.app/allpartners')
        .then(res=>res.json())
        .then(data=>{
            setAllPartners(data)
            
        })
    },[reload])

    
  if(loding){
    return <Loding></Loding>
  }

    return (
         <div className='max-w-[1140px] mx-auto my-5'>
      
           
            <h1 className='text-primary text-center font-bold text-3xl underline my-5'>All Study Partner :<span className='text-secondary'>({searchPartners.length})</span></h1>
            
              <p className='my-3 font-semibold'>Search for Subject:</p>
              <label className='input w-[180px] md:w-[300px]'>
                    <input type="text"
                    value={search}
                     onChange={e=>setSearch(e.target.value)}
                     placeholder='Search subject' />
                </label>
            
            
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
               {
                searchPartners.map(partner=><Find3PartnerCard key={partner._id} partner={partner}></Find3PartnerCard>)
            }
         </div>

        </div>
    );
};

export default FindPartners;