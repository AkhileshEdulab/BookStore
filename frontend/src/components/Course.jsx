

import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Course() {
 
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get('http://localhost:4001/book')
      console.log(res.data)
      setBook(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 dark:bg-slate-900 dark:text-white '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-green-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora ea nesciunt excepturi. Quo facere
            blanditiis cupiditate ipsam, debitis, tenetur placeat praesentium ab rem nobis eius, ut dolor deserunt nesciunt.
          </p>

         <Link to="/">
         <button className='border rounded-md px-4 py-2 btn btn-outline btn-accent duration-300 transition-all ease-in-out mt-6'>
            Back
          </button>
         </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
          {book.map((item,index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
