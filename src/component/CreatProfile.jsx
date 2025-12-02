import React, { use, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { reload } from 'firebase/auth';




const CreatProfile = () => {
    
    const {user,setReload}= use(AuthContext)
    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
    
        e.preventDefault();

        const name = e.target.name.value;
        const profileimage =e.target.photo.value;
        const subject = e.target.subject.value;
        const studyMode = e.target.studymode.value;
        const availabilityTime =e.target.time.value;
        const location = e.target.location.value;
        const experienceLevel = e.target.level.value;
        const rating = e.target.rating.value;
        const patnerCount = Number(0);
        const email = e.target.email.value;
        //console.log('from creat profile hello');
        
        const profile={name,profileimage,subject,studyMode,availabilityTime,location,experienceLevel,rating,patnerCount,email}
       // console.log(profile);
        fetch('https://study-mate-server-blond.vercel.app/allpartners',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(profile)
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.insertedId){
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account created",
                showConfirmButton: false,
                timer: 1500
});
        setReload(!reload)
        
         navigate('/findPartners')

            }
             
        })

    }
    return (
        
   
    <div className="card bg-base-100 mx-auto my-5 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-primary underline">Create Your Profile!</h1>
       <form onSubmit={handleSubmit} >
         <fieldset className="fieldset">

         <div className='flex gap-3'>
            <div>
                 <label className="label font-bold text-black">Name</label>
          <input type="text" name='name'  className="input" defaultValue={user?.displayName} readOnly   />
            </div>
          <div>
               <label className="label font-bold text-black">Profileimage</label>
               <input type="text" name='photo'  className="input" required   />
          </div>
         </div>

         <div className='flex gap-3'>
            <div>
                 <label className="label font-bold text-black">Subject:</label>
                <input type="text" name='subject'  className="input"  required  />
            </div>

           <div>
               <label className="label font-bold text-black">StudyMode</label>
               <input type="text" name='studymode'  className="input" required  />
           </div>

         </div>

         <div className='flex gap-3'>
            <div>
                <label className="label font-bold text-black">AvailabilityTime</label>
                <input type="text" name='time'  className="input" required  />
            </div>
            <div>
                <label className="label font-bold text-black">Location</label>
               <input type="text" name='location'  className="input" required   />
            </div>

         </div>

         <div className='flex gap-3'>
             <div>
                 <label className="label font-bold text-black">ExperienceLevel</label>
                <input type="text"  name='level' className="input" required  />

             </div>
             <div>
                <label className="label font-bold text-black">Rating</label>
               <input type="text" name='rating'  className="input" required  />
             </div>

         </div>

         <div className='flex gap-3'>
               <div>
                 <label className="label font-bold text-black ">Email</label>
                   <input type="email"  name='email' className="input" defaultValue={user?.email} readOnly   />
               </div>
               <div></div>
         </div>

         

        

        

          

          

         
          

          
          
         

       
          <button className="btn btn-neutral mt-4">Create Account</button>
        </fieldset>
       </form>
      </div>
    </div>
  
    );
};

export default CreatProfile;