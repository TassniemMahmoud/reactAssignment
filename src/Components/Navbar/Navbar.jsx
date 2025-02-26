import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (

<nav className="bg-[#2c3e50] fixed top-0 start-0 end-0 py-5 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
  
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">START FRAMEWORK</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
       
        <li>
          <NavLink to="about" className="block text-lg  rounded-3 text-white md:p-0 active:bg-[#1abc9c]  " aria-current="page">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block text-lg  rounded-3 text-white md:p-0 active:bg-[#1abc9c] " aria-current="page">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="Contact" className="block text-lg  rounded-3 text-white md:p-0 active:bg-[#1abc9c]" aria-current="page">CONTACT</NavLink>
        </li>
 
      </ul>
    </div>
  </div>
</nav>




  )
}
