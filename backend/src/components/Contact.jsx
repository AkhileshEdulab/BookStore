
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data); 
  };

  return (
    <>
      <div className=" flex w-full h-screen items-center justify-center ">
        <div className="w-full max-w-md p-6 shadow-md rounded-md relative bg-slate-900 ">

          <Link to="/" className="py-4 flex justify-end cursor-pointer  text-white" onClick={onClose}>
            ✕
          </Link>

          <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact</h2>

    
          <form onSubmit={handleSubmit(onSubmit)}>

             {/* Username Field */}
             <div className="mb-4">
              <label className="block mb-1 text-white label-text">Username</label>
              <div className="flex items-center gap-2 input bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Username"
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 5,
                      message: 'Username must be at least 5 characters',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Username cannot exceed 20 characters',
                    },
                  })}
                />
              </div>
              {errors.username && <span className="text-red-500">{errors.username.message}</span>}
            </div>


            {/* Email Field */}
            <div className="mb-4">
              <label className="block mb-1 text-white label-text">Email</label>
              <div className="flex items-center gap-2 input bg-gray-100 outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793L7.674 8.51a.75.75 0 0 0 .652 0L14.924 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954L8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow outline-none"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
              </div>
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

           
            {/* Message Field */}
            <div className="mb-4">
              <label className="block mb-1 text-white label-text">Message</label>
              <div className="flex items-start gap-2 textarea textarea-bordered outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 mt-1 "
                >
                  <path d="M15 2A2 2 0 0 1 17 4v8a2 2 0 0 1-2 2H5l-4 4V4a2 2 0 0 1 2-2h12Z" />
                </svg>
                <textarea
                  placeholder="Type your message here"
                  className="w-full h-24 outline-none"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                />
              </div>
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button className="w-full btn btn-outline btn-accent transition duration-300" type="submit">
              Send Message
            </button>
          </form>

          {/* Close Button at the Bottom */}
          <div className="pt-4">
            <Link to="/">
              <button
                className="btn btn-outline btn-error w-full py-2 "
                onClick={onClose}
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
