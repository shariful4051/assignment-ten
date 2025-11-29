import React, { use, useRef } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../AuthContext/AuthContext';

const MyConnectionCard = ({partner,myPartners,setMyPartners}) => {
  const {user,reload,setReload}=use(AuthContext)
  const {profileimage,name,subject,experienceLevel,studyMode,location,availabilityTime,rating,_id} = partner;

  const openModalRef = useRef()

const openModal =()=>{
  openModalRef.current.showModal()

}
//-------------edit partner-----------

const editPartner = (e)=>{
  e.preventDefault();

  
        const profileimage =e.target.photo.value;
        const subject = e.target.subject.value;
        const studyMode = e.target.studymode.value;
        const availabilityTime =e.target.time.value;
        const location = e.target.location.value;
        const experienceLevel = e.target.level.value;
        const rating = e.target.rating.value;

         const updatedPartner={profileimage,subject,studyMode,availabilityTime,location,experienceLevel,rating}
         console.log('from update',updatedPartner);
       
         fetch(`http://localhost:3000/myconnection/${_id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updatedPartner)
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
          if(data.modifiedCount){
            openModalRef.current.close()
            setReload(!reload)
            Swal.fire({
                title: "Updated!",
                icon: "success",
               draggable: true
         });
          }
          

 
         })

        
        

}
  

    
    //----------delete--------
    const deletePartner = (id)=>{
    
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to delete!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/myconnection/${id}`,{
    method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.deletedCount){
      const remainingPartners = myPartners.filter(partner=>partner._id !==id)
      setMyPartners(remainingPartners)
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
    })
    
  }
});
    }
    
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={profileimage}
      alt="Shoes"
      className="rounded-xl h-[200px] w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p><span className='font-semibold '>Subject : </span> <span className='text-primary font-bold'>{subject}</span></p>
    <p>
        <span className='font-semibold'>Skill : </span><span className='text-primary font-bold'>{experienceLevel}</span>
    </p>
    <p><span className='font-semibold'>Rating : </span> <span className='text-primary font-bold'>{rating}</span></p>

    <p><span className='font-semibold'>Location : </span> <span className='text-primary font-bold'>{location}</span></p>

    <p><span className='font-semibold'>Available-Time : </span> <span className='text-primary font-bold'>{availabilityTime}</span></p>

    <p><span className='font-semibold'>Study-Mode : </span> <span className='text-primary font-bold'>{studyMode}</span></p>

    <div className="card-actions">
      <button onClick={()=>deletePartner(_id)} className="btn btn-primary">Delete</button>
      <button onClick={openModal} className="btn btn-primary">Edit</button>
    </div>
  </div>
</div>



{/* Open the modal using document.getElementById('ID').showModal() method */}


  <dialog ref={openModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Edit!</h3>

    <form onSubmit={editPartner}>

    <div className='flex gap-3'>
            <div>
                 <label className="label font-bold text-black">Name</label>
          <input type="text" name='name'  className="input" defaultValue={user?.displayName} readOnly   />
            </div>
          <div>
               <label className="label font-bold text-black">Profileimage</label>
               <input type="text" name='photo'  className="input" defaultValue={profileimage}   />
          </div>
         </div>

         <div className='flex gap-3'>
            <div>
                 <label className="label font-bold text-black">Subject:</label>
                <input type="text" name='subject'  className="input" defaultValue={subject}   />
            </div>

           <div>
               <label className="label font-bold text-black">StudyMode</label>
               <input type="text" name='studymode'  className="input" defaultValue={studyMode}  />
           </div>

         </div>

         <div className='flex gap-3'>
            <div>
                <label className="label font-bold text-black">AvailabilityTime</label>
                <input type="text" name='time'  className="input" defaultValue={availabilityTime}  />
            </div>
            <div>
                <label className="label font-bold text-black">Location</label>
               <input type="text" name='location'  className="input" defaultValue={location}   />
            </div>

         </div>

         <div className='flex gap-3'>
             <div>
                 <label className="label font-bold text-black">ExperienceLevel</label>
                <input type="text"  name='level' className="input" defaultValue={experienceLevel} />

             </div>
             <div>
                <label className="label font-bold text-black">Rating</label>
               <input type="text" name='rating'  className="input" defaultValue={rating}  />
             </div>

         </div>

         <div className='flex gap-3'>
               <div>
                 <label className="label font-bold text-black ">Email</label>
                   <input type="email"  name='email' className="input" defaultValue={user?.email} readOnly   />
               </div>
               <div></div>
         </div>
         <input className='btn w-full my-3 bg-black text-white' type="submit" value="Update Now" />   
         </form> 
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Cancel</button>
      </form>
    </div>
  </div>
</dialog>

</div>
    );
};

export default MyConnectionCard;