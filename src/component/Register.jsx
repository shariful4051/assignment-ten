import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { MdRemoveRedEye } from 'react-icons/md';
import { BsFillEyeSlashFill } from 'react-icons/bs';
  

const Register = () => {
    const navigate = useNavigate()
    const [showPassword,setShowPassword] = useState(false)
  const [error,setError]=useState('')
  const eyeToggle = (e)=>{
      e.preventDefault()
      setShowPassword(!showPassword)
    }

    const {googleUser,createUser,updateUser,setUser} = use(AuthContext)
 //-----------google Login
    const handleGoogleLogin = ()=>{
        googleUser()
        .then(result=>{
            setUser(result.user)
           toast.success('Google login success!')
    })
    .catch(error=>{
        toast.error(error.message)
    })
    }

    //-------------register-----

     const handleRegister =(e)=>{
      
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      const name =e.target.name.value;
      const photo = e.target.photo.value;
      //console.log(email,password,name,photo); 
      

        const passwordReg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if(!passwordReg.test(password)){
    setError('Password must be at least 6 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. @, $, !, %, *, ?, &)')
    return
  }

    

setError('')
      createUser(email,password)
    
      .then(result=>{
        const user= result.user;
       // console.log(user);
        toast.success('Register successfully')
        
      

        // updateProfile
        updateUser({
          displayName:name,
          photoURL:photo
        })
        .then(()=>{
          setUser({...user,displayName:name,photoURL:photo})
          
          navigate('/')
        })
        .catch(error=>{
          setUser(user)
          toast(error.message)
        })

      })

    
      .catch(error=>{
        const errorm = error.message;
       // console.log(errorm);
        toast.error(errorm)
        
      })
    }
    return (
  <div className='w-11/12 mx-auto'>

        
     
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>

        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">

          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" required />
         

          <label className="label">Photo</label>
          <input type="text" name="photo" className="input" placeholder="Photo URL" required/>

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />

       <div className='relative'>
        <label className="label">Password</label>
          <input type={showPassword?"text":"password"} name="password" className="input" placeholder="Password" required/>
          <button onClick={eyeToggle} className='absolute  top-[30px] right-[25px]'>{showPassword?<BsFillEyeSlashFill />:<MdRemoveRedEye/>}</button>
       </div>
       <p className='text-red-500'>{error}</p>
          
        
             
        
    


         
          
          <button className="btn btn-neutral mt-4">Register</button>

           <p className='text-center font-semibold'>Already Have An Account? Please</p>
          <Link to='/login'><p className='underline font-bold text-center'>LogIn Now.</p></Link>
        </fieldset>
        </form>

             <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        
      </div>
    </div>
    </div>
    );
};

export default Register;