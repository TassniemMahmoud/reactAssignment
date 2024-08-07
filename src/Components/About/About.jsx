import React from 'react'

export default function About() {
  return (
<div className="  min-h-screen bg-[#1abc9c] flex justify-center items-center w-full">
  <div className=" container w-3/4">
    <h1 className='text-white text-5xl font-bold mb-3 text-center'>ABOUT COMPONENT</h1>
    <div className="flex justify-center items-center text-xl mt-3 mb-3">
    <div className="line w-20 h-1 bg-white me-3"></div>
    <i className='fa-solid fa-star text-white'/>
    <div className="line w-20 h-1 bg-white ms-3"></div>
    </div>
   <div className="grid md:grid-cols-2 text-left gap-10">
<div className="text-white">
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

</div>
<div className="text-white">
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

</div>
   </div>
  </div>
</div>

  )
}
