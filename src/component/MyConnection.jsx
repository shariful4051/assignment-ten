import React, { use, useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import MyConnectionCard from './MyConnectionCard';
import Loding from './Loding';

const MyConnection = () => {

    const {user,reload,loding} = use(AuthContext)

    const [myPartners,setMyPartners] = useState([])
    console.log('myconnection ',myPartners);
    useEffect(()=>{
        fetch(`http://localhost:3000/myconnection?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyPartners(data)

        })
    },[user,reload])
    if(loding){
        return <Loding></Loding>
    }
    return (
        <div>
            <h1 className='text-center my-3'><span className='text-2xl font-bold underline text-primary'>My Partners:</span><span className='text-2xl font-bold'>{myPartners.length}</span></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {myPartners.map(partner=><MyConnectionCard 
             key={partner._id} 
             partner={partner}
             myPartners={myPartners}
             setMyPartners={setMyPartners}
            ></MyConnectionCard>)}
        </div>
        </div>
    );
};

export default MyConnection;