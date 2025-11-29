import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyConnectionCard = ({partner,myPartners,setMyPartners}) => {

    const {profileimage,name,subject,experienceLevel,rating,_id} = partner;
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
    <div className="card-actions">
      <button onClick={()=>deletePartner(_id)} className="btn btn-primary">Delete</button>
      <button className="btn btn-primary"><Link to={`/partnerDetails/${_id}`}>Edit</Link></button>
    </div>
  </div>
</div>
    );
};

export default MyConnectionCard;