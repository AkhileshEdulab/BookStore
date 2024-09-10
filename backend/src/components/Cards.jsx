
import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="p-4 my-3 mt-4">
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-48 overflow-hidden ">
            <img
              src={item.image }
              alt="Book Image"
              className="object-cover w-full h-full  "
            />
          </figure>
          <div className="card-body p-4 ">
            <h2 className="card-title text-lg font-bold">
              {item.name}
            <div className="badge btn btn-xs btn-accent btn-outline ml-2 cursor-pointer ">{item.catageory}</div>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
              {item.title}
            </p>
            <div className="card-actions justify-between mt-4 cursor-pointer">
              <div className="btn btn-xs btn-accent btn-outline">
              ${item.price}
              </div>
              <div className="btn btn-xs btn-accent btn-outline">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
