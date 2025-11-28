import React, { use } from 'react';
import AuthContext from '../AuthContext/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    
    return (
       <div className='max-w-[1140px] mx-auto'>
            
      <div className=' bg-blue-200 p-3 rounded-2xl'>
          <h1 className='font-bold  text-green-700'>Your Profile</h1>
        <div>
            <img className='w-[200px] h-[200px] rounded-full bg-amber-200' src={user?.photoURL} alt="" />
        </div>
        <p><span className='font-bold'>Name :</span>{user?.displayName}</p>
        <p><span className='font-bold'>Email</span>:{user?.email}</p>
      </div>
        </div>
    );
};

export default Profile;