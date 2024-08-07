import React from 'react'

export default function Footer() {
  return (
<footer className='flex flex-wrap items-center justify-center bg-[#2c3e50] text-white'>
<div className="text-center p-10 w-1/3 max-md:w-1/2 max-sm:w-full">
<h3 className='uppercase text-3xl font-semibold mb-4 '>Location</h3>
  <p className='text-md'>2215 John Daniel Drive</p>
  <p className='text-md mt-5'>Clark, MO 65243</p>
</div>
<div className="text-center p-10 w-1/3 max-md:w-1/2 max-sm:w-full">
  <h2 className='uppercase text-3xl font-semibold mb-4'>around the web</h2>
<div className="flex items-start justify-center gap-2">
<span className='border-2 border-white w-[30px] h-[30px] flex items-center justify-center rounded-full p-1 mx-2'><i className="fa-brands fa-facebook  "></i></span>
<span className='border border-white w-[30px] h-[30px] flex items-center justify-center rounded-full p-1 mx-2 '><i className="fa-brands fa-twitter "></i></span>
  <span className='border border-white w-[30px] h-[30px] flex items-center justify-center rounded-full p-1 mx-2'><i className="fa-brands fa-linkedin-in "></i></span>
  <span className='border border-white w-[30px] h-[30px] flex items-center justify-center rounded-full p-1 mx-2'><i className="fa-solid fa-globe "></i></span>

</div>
</div>
<div className="text-center p-10 w-1/3 max-md:w-1/2 max-sm:w-full">
<h3 className='text-3xl font-semibold'>ABOUT FREELANCER</h3>
  <p className='text-md'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>
<div className=" bg-[#1a252f] text-white w-full text-center text-lg">
        <p >Copyright © Your Website 2021</p>
      </div>
</footer>
 
  )
}
