
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios'
import toast from 'react-hot-toast';

function SignUp() {;
  
  const location=useLocation()
  const navigate=useNavigate()
  const from = location.state?.form?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success ("Signup successfully");
        navigate(from,{replace:true})
      }
      localStorage.setItem("User",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error:" + err.response.data.message)
      }
     });
  };
  
  
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <div className="w-[600px] ">
        <div className="modal-box overflow-hidden dark:bg-slate-800 dark:text-white ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-7 p-4">
              <p className="pb-2">Full Name</p>
              <label className="input input-bordered flex items-center gap-2 ">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 text-black">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
                <input
                  type="text"
                  className="grow text-black"
                  placeholder="fullname "
                  {...register('fullname', { required: 'fullname is required' })}
                />
              </label>
              {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}
              
              <p className="pb-2 pt-2">Email</p>
              <label className="input input-bordered flex items-center gap-2">
              <svg
                  
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-black"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow text-black"
                  placeholder="Email"
                  {...register('email', { required: 'Email is required' })}
                />
              </label>
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              
              <p className="pb-2 pt-2">Password</p>
              <label className="input input-bordered flex items-center gap-2 ">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                   className="grow text-black"
                  {...register('password', { required: 'Password is required' })}
                />
              </label>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              
              <div className='flex justify-between items-center mt-4'>
                <button className='px-4 py-1 btn btn-outline btn-accent' type='submit'>SignUp</button>
                <p>Have an account?
                  <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Login /> 
    </div>
  );
}

export default SignUp;


