import React, { use, useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import MyConnectionCard from './MyConnectionCard';

const MyConnection = () => {

    const {user,reload} = use(AuthContext)

    const [myPartners,setMyPartners] = useState([])
    console.log('myconnection ',myPartners);
    useEffect(()=>{
        fetch(`http://localhost:3000/myconnection?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyPartners(data)

        })
    },[user,reload])
    return (
        <div>
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