


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className='dark:bg-slate-900 dark:text-white '>
    <section className="flex flex-col items-center justify-center min-h-screen ">
      
      <img 
    src="public\akhil.jpg.jpeg" 
    alt="Akhilesh Yadav" 
    className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6"
  />
  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h1>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-center">
        Hi, I'm <span className="font-bold text-blue-600">Akhilesh Yadav</span>, a passionate web developer
        with expertise in creating responsive and dynamic websites. I love working
        with the latest web technologies like React, Angular, and Node.js.
        <br />
        <br />
        With over <span className="font-bold">6 month  of experience</span>, I specialize in creating seamless user
        experiences and high-performing websites.
      </p>
    </section>
   <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li className="relative mb-10">
    <div className="timeline-middle absolute left-0 transform -translate-x-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-gray-700">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start flex flex-col items-center md:items-start md:text-end px-4">
      <h1 className='text-2xl md:text-4xl mb-2'>Skill</h1>
      <time className="font-mono italic text-sm md:text-base">April</time>
      <div className="text-lg font-black">HTML</div>
      <p className="text-sm md:text-base">HTML: The standard language for creating web pages. It structures content with elements like headings, paragraphs, and links.</p>
    </div>
    <hr className="border-gray-300 mt-2 md:mt-4" />
  </li>
  <li className="relative mb-10">
    <div className="timeline-middle absolute left-0 transform -translate-x-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-gray-700">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end flex flex-col items-center md:items-end px-4">
      <time className="font-mono italic text-sm md:text-base">April</time>
      <div className="text-lg font-black">CSS</div>
      <p className="text-sm md:text-base">CSS: Styles HTML elements. It controls layout, colors, and fonts, making web pages visually appealing.</p>
    </div>
    <hr className="border-gray-300 mt-2 md:mt-4" />
  </li>
  <li className="relative mb-10">
    <div className="timeline-middle absolute left-0 transform -translate-x-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-gray-700">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start flex flex-col items-center md:items-start md:text-end px-4">
      <time className="font-mono italic text-sm md:text-base">March</time>
      <div className="text-lg font-black">JavaScript</div>
      <p className="text-sm md:text-base">JavaScript: A programming language that adds interactivity to web pages, handling dynamic content and user interactions.</p>
    </div>
    <hr className="border-gray-300 mt-2 md:mt-4" />
  </li>
  <li className="relative mb-10">
    <div className="timeline-middle absolute left-0 transform -translate-x-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-gray-700">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end flex flex-col items-center md:items-end px-4">
      <time className="font-mono italic text-sm md:text-base">May, June, July, August</time>
      <div className="text-lg font-black">Angular</div>
      <p className="text-sm md:text-base">Angular: A framework for building dynamic single-page applications with features like two-way data binding and dependency injection.</p>
    </div>
    <hr className="border-gray-300 mt-2 md:mt-4" />
  </li>
  <li className="relative mb-10">
    <div className="timeline-middle absolute left-0 transform -translate-x-1/2 top-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-gray-700">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start flex flex-col items-center md:items-start md:text-end px-4">
      <time className="font-mono italic text-sm md:text-base">September, October, November, December</time>
      <div className="text-lg font-black">React.js</div>
      <p className="text-sm md:text-base">React.js: A library for building user interfaces with reusable components, focusing on fast rendering and state management.</p>
    </div>
  </li>
</ul>
<div className='flex justify-center mb-5'>
<Link to="/" >
<button className='btn btn-outline btn-accent '>Back</button>
</Link>
</div>
</div>
<Footer/>
    </>
  );
};

export default About;


