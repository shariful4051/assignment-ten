import React from 'react';
import { useLoaderData } from 'react-router';

const PartnerDetails = () => {
    const partner = useLoaderData();
    const{name,subject,studyMode,location,availabilityTime,experienceLevel,patnerCount,profileimage,


}=partner;

    console.log('from details',partner);
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
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default PartnerDetails;