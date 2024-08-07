import React, { useState } from 'react';

import img1 from "../../assets/imgs/port1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";
import img4 from "../../assets/imgs/port1.png";
import img5 from "../../assets/imgs/port2.png";
import img6 from "../../assets/imgs/port3.png";


export default function Portfolio() {
  const allImg = [img1,img2,img3,img4, img5, img6];
  const [currentIndex, setcurrentIndex]= useState(0);
  const [isOpen, setisOpen]= useState(false);
  function handleIsOpen(index){
    setcurrentIndex(index);
    setisOpen(true)
  }
 function closeModal(){
  setisOpen(false)
 }
  return (
    
    <div className='container mx-auto mt-20 '>
      <h1 className='text-gray-700 text-3xl font-bold text-center'>PORTFOLIO COMPONENT</h1>
      <div className="flex justify-center items-center text-xl mt-3 mb-3">
    <div className="line w-20 h-1 bg-[#2c3e50] me-3"></div>
    <i className='fa-solid fa-star text-[#2c3e50]'/>
    <div className="line w-20 h-1 bg-[#2c3e50] ms-3"></div>
    </div>
      <div className="flex justify-center items-center flex-wrap mt-5 ">
      {allImg.map((ele,index)=><div key = {index} className='w-1/3 px-2 py-2 cursor-pointer ' onClick={()=>handleIsOpen(index)}>
<div className="relative">
<img src={ele} className='w-full  '/>
<div className="layer absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center duration-500 bg-[#1abc9c] opacity-0 hover:opacity-100 ">
  <i className='fa-solid fa-plus text-white text-5xl'></i>
</div>
</div>
      </div> )}

      </div>
   
{isOpen && (<div className="fixed bg-slate-400 bg-opacity-25 flex items-center justify-center inset-0">
  <div className=" p-3">
    <img src= {allImg[currentIndex]} className='w-[500px]'/>
  </div>
  <button onClick={closeModal} className='absolute start-3 top-3 p-5 rounded-full  text-white text-3xl'>
x
  </button>
</div>)}


      </div>
  )
}
