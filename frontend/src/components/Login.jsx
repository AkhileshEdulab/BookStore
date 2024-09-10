

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const userInfo = {
      
      email: data.email,
      password: data.password,
    };
  
    console.log("Submitting user info:", userInfo); 

    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfully!');
        document.getElementById('my_modal_3').close();
        setTimeout(()=>{ 
        window.location.reload();
        localStorage.setItem("User",JSON.stringify(res.data.user));
        },1000);
      }
     
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error:" + err.response.data.message)
        setTimeout(()=>{})
      }
     });
  };


 

  return (
    <>
      <div className=''>
        <dialog id="my_modal_3" className="modal w-full flex h-screen items-center justify-center ">
          <div className="modal-box dark:bg-slate-900 dark:text-white ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link to="/"
                
                className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
                onClick={()=>document.getElementById('my_modal_3').close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-7 p-4">
                {/* Email Field */}
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
                    className="grow"
                    placeholder="Email"
                    autoComplete='email'
                    {...register('email', { required: 'Email is required' })}
                  />
                </label>
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                {/* Password Field */}
                <p className="pb-2 pt-2 ">Password</p>
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
                    className="grow"
                    placeholder="Password"
                    autoComplete='password'
                    
                    {...register('password', { required: 'Password is required' })}
                  />
                </label>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                <div className="flex justify-between mt-4">
                  <button className="px-4 py-1 btn btn-outline btn-accent" >
                    Login
                  </button>
                  <p >
                    Not registered?{' '}
                    <Link
                      to="/signup"
                      className="text-blue-700"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;





