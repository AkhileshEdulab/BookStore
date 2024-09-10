


import React from 'react';


function Hero() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center pt-20 my-10 dark:bg-slate-900 dark:text-white '>
        <div className='md:w-1/2 w-full text-center md:text-left order-2 md:order-1 px-5'>
          <h1 className='text-3xl md:text-4xl font-bold pt-10'>
            Hello, welcome here to learn something
            <span style={{ color: 'green' }}> New Every Day!!!</span>
          </h1>

          <p className='text-base md:text-lg font-semi mt-6 md:mt-10'>
          Discover a haven for book lovers at our bookstore, featuring a curated selection of novels, non-fiction, and unique finds. Enjoy cozy reading nooks and personalized recommendations in a welcoming atmosphere."


             </p>

          <div className='pt-6 md:pt-10 '>
            <label className=" flex items-center gap-2 border rounded-md pl-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 ">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow p-2 outline-none" placeholder="Email" />
            </label>
          </div>

          <button className="btn btn-outline btn-accent mt-4">Subscribe</button>
        </div>

        <div className='md:w-1/2 w-full mt-10 md:mt-0 flex justify-center order-1'>
          <img src="https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" alt="Book" className='max-w-full md:w-96 md:h-96 w-72 h-72 object-cover rounded-md' />
        </div>
      </div>
    </>
  );
}

export default Hero;



