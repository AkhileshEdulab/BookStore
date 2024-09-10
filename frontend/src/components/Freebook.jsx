
import React from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {

  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get('http://localhost:4001/book')
      console.log(res.data)
      const data = res.data.filter((data) => data.catageory === "Free");
      setBook(data)
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='text-center my-8'>
          <h1 className='text-3xl font-bold'>Free Book</h1>
          <p className='text-gray-600 dark:text-gray-400 mt-2'>
          Welcome to FreeBook, your go-to shop for discovering new reads at no cost. 
          
          
          Explore a wide selection of free eBooks and physical copies across various genres. Our mission is to make reading accessible to everyone, 
          offering a friendly space for book enthusiasts to find their next favorite story.
          </p>
        </div>
        <div >
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
