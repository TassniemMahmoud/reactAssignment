import React, { useState } from 'react'

export default function Contact() { 
  const[name, setname]= useState(false);
  const [age,setage]= useState(false);
 const [email, setemail] = useState(false);
 const[password,setpassword] = useState(false)
  return (
    <div className="container mx-auto mt-20">
       <h1 className='text-gray-700 text-3xl font-bold text-center'>CONTACT SESSION</h1>
      <div className="flex justify-center items-center text-xl mt-3 mb-3">
    <div className="line w-20 h-1 bg-[#2c3e50] me-3"></div>
    <i className='fa-solid fa-star text-[#2c3e50]'/>
    <div className="line w-20 h-1 bg-[#2c3e50] ms-3"></div>
    </div>
    <div className="w-3/4 py-10 mx-auto ">
    <form action='' className='max-w-3xl mx-auto p-10'>
    <div class="relative z-0 w-full mb-5 group">
      <input onInput={(e)=>{e.target.value == "" ? setname(false):setname(true)}} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="name" class="absolute text-sm text-[#1abc9c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">User Name</label>
  </div>
    <div class="relative z-0 w-full mb-5 group">
      <input onInput={(e)=>{e.target.value == "" ? setage(false):setage(true)}} type="number" name="age" id="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="age" class="absolute text-sm text-[#1abc9c]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">User Age</label>
  </div>
    <div class="relative z-0 w-full mb-5 group">
      <input onInput={(e)=>{e.target.value == "" ? setemail(false):setemail(true)}} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="email" class="absolute text-sm text-[#1abc9c]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">User Email</label>
  </div>
    <div class="relative z-0 w-full mb-5 group">
      <input onInput={(e)=>{e.target.value == "" ? setpassword(false):setpassword(true) }} type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="password" class="absolute text-sm text-[#1abc9c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">User Password</label>
  </div>
   


<button className='text-white  focus:outline-none  bg-[#1abc9c] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={(e)=>e.preventDefault()}>Send Message</button>
</form>
    </div>
 
    </div>
  )
}
