
import { Link, NavLink } from 'react-router';

const Find3PartnerCard = ({partner}) => {
    console.log(partner);
    const {profileimage,name,subject,experienceLevel,rating,_id,patnerCount} = partner;
   
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

    <p><span className='font-semibold '>Partner-Count : </span> <span className='text-primary font-bold'>{patnerCount}</span></p>

    <p>
        <span className='font-semibold'>Skill : </span><span className='text-primary font-bold'>{experienceLevel}</span>
    </p>
    <p><span className='font-semibold'>Rating : </span> <span className='text-primary font-bold'>{rating}</span></p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={`/partnerDetails/${_id}`}>View Profile</Link></button>
    </div>
  </div>
</div>
    );
};

export default Find3PartnerCard;