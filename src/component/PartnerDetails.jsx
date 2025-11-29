import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const PartnerDetails = () => {
  const{user}=use(AuthContext)
    const partner = useLoaderData();
    const{name,subject,studyMode,location,availabilityTime,experienceLevel,patnerCount,profileimage,_id,rating,email}=partner;

    console.log('from details',partner);

  //---------add partner---------

  const addPartner = ()=>{
    const partner ={
      name:name,
      partnerId:_id,
      profileimage:profileimage,
      subject:subject,
      studyMode:studyMode,
      availabilityTime:availabilityTime,
      location:location,
      experienceLevel:experienceLevel,
      rating:rating,
      patnerCount:patnerCount,
      email:email,
      myEmail:user?.email
    }
    console.log('from add partner',partner);
    fetch('http://localhost:3000/myconnection',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(partner)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(' add patner atter post data',data);
      if(data.insertedId){
         Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Patner added successfully",
                        showConfirmButton: false,
                        timer: 1500
        });
      }
    })
    .catch(error=>{
      toast.error(error.message)
    });
    
    
  }

    return (

   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={profileimage}
      className="max-w-sm rounded-lg lg:h-[555px] h-[333px] shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">
        <span className='font-semibold '>Name :</span>
        <span className='font-bold text-primary'>{name}</span>
      </h1>
      <p className="py-2">
       <span className='font-semibold '>Subject :</span>
        <span className='font-bold text-primary'>{subject}</span>
      </p>
      <p className="py-2">
       <span className='font-semibold '>StudyMode:</span>
        <span className='font-bold text-primary'>{studyMode}.</span>
      </p>
      <p className="py-2">
       <span className='font-semibold '>Location :</span>
        <span className='font-bold text-primary'>{location}.</span>
      </p>
      <p className="py-2">
       <span className='font-semibold '>AvailabilityTime :</span>
        <span className='font-bold text-primary'>{availabilityTime}.</span>
      </p>
      <p className="py-2">
       <span className='font-semibold '>ExperienceLevel :</span>
        <span className='font-bold text-primary'>{experienceLevel}.</span>
      </p>
      <p className="py-2">
       <span className='font-semibold '>PatnerCount :</span>
        <span className='font-bold text-primary'>{patnerCount}.</span>
      </p>
      
      <button onClick={addPartner} className="btn btn-primary">Add Partner</button>
    </div>
  </div>
</div>
    );
};

export default PartnerDetails;