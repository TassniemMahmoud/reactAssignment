import React from 'react';
import avatar from "../../assets/imgs/avataaars.svg"

export default function Home() {
  return (
    <div className='min-h-screen bg-[#1abc9c] flex justify-center items-center flex-col'>
      <img src = {avatar} className='size-64'/>
      <h1 className='text-4xl font-bold text-white mt-4'>START FRAMEWORK</h1>
      <div className="flex justify-center items-center text-xl mt-3 mb-3">
    <div className="line w-20 h-1 bg-white me-3"></div>
    <i className='fa-solid fa-star text-white'/>
    <div className="line w-20 h-1 bg-white ms-3"></div>
    </div>
    <p className='mt-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

