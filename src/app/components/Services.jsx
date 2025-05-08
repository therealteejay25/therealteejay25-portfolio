import React from 'react'

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-6 md:px-24 py-16 bg-[#f1f1f1] rounded-b-[6rem] md:rounded-b-[10rem]'>
      <h3 className='text-gray-900 text-center text-2xl md:text-3xl font-semibold'>
        Collaborating with brands and agencies <br /> to create impactful results
      </h3>

      <div className='my-8 w-full'>
        <div className='h-[1px] w-full md:w-[70vw] mx-auto bg-gray-300'></div>
        <div className='bg-white w-24 mx-auto hover:rotate-0 transition-all flex justify-center items-center -translate-y-4 -rotate-12 rounded-full py-1 px-4 text-sm text-gray-700'>
          Services
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-6'>
        {/* UI/UX Design */}
        <div className='flex w-full sm:w-72 flex-col gap-4 hover:bg-white rounded-3xl transition-all p-8'>
          <img src="ui.png" className='h-10 w-10' alt="UI icon" />
          <h3 className='text-xl text-gray-900'>UI/UX Design</h3>
          <p className='text-sm text-gray-700'>
            I design intuitive, visually engaging interfaces that enhance user experience. From wireframes to prototypes, I bring ideas to life with Figma, focusing on usability, clarity, and clean aesthetic systems that resonate.
          </p>
        </div>

        {/* Web Development */}
        <div className='flex w-full sm:w-72 flex-col gap-4 hover:bg-white rounded-3xl transition-all p-8'>
          <img src="code.png" className='h-10 w-10' alt="Code icon" />
          <h3 className='text-xl text-gray-900'>Web Development</h3>
          <p className='text-sm text-gray-700'>
            Using React, Next.js, Tailwind, and modern tools, I build fast, responsive, and accessible websites. Whether it's a landing page or a full-stack web app, I develop scalable and maintainable frontend solutions.
          </p>
        </div>

        {/* Graphic Design */}
        <div className='flex w-full sm:w-72 flex-col gap-4 hover:bg-white rounded-3xl transition-all p-8'>
          <img src="graphic.png" className='h-10 w-10' alt="Graphic design icon" />
          <h3 className='text-xl text-gray-900'>Graphic Design</h3>
          <p className='text-sm text-gray-700'>
            I craft brand visuals, social media content, and creative graphics that communicate clearly and inspire. My work blends aesthetics and message — perfect for startups, personal brands, and digital campaigns.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
