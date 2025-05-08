import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#f1f1f1]'>
      <div
        id='contact'
        className='min-h-screen py-16 flex flex-col justify-center items-center px-6 md:px-20 bg-white rounded-t-[4rem] md:rounded-t-[10rem]'
      >
        <h3 className='font-semibold my-5 text-center text-2xl md:text-3xl text-gray-900'>
          Tell Me About Your <br /> Next Project
        </h3>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-sm md:max-w-md justify-center items-center my-6'>
          <button className='bg-gray-950 w-full md:w-auto cursor-pointer flex gap-2 text-white text-sm py-3 px-7 rounded-full justify-center items-center'>
            Email Me <img src='EnvelopeSimple.png' className='h-[18px]' alt='email icon' />
          </button>
          <button className='bg-white w-full md:w-auto cursor-pointer border-2 flex gap-2 border-gray-200 text-gray-950 text-sm py-3 px-7 rounded-full justify-center items-center'>
            WhatsApp <img src='WhatsAppLogo.png' className='h-[18px]' alt='whatsapp icon' />
          </button>
        </div>

        <div className='my-12 w-full'>
          <div className='h-[1px] w-full md:w-[70vw] mx-auto bg-gray-300'></div>
          <div className='bg-white w-28 mx-auto transition-all flex justify-center items-center -translate-y-4 rounded-full py-1 px-4 text-sm text-gray-700'>
            OR
          </div>
        </div>

        <form action='' className='flex flex-col gap-4 w-full max-w-md px-2'>
          <input
            type='text'
            placeholder="What's your name?..."
            className='border-2 border-gray-200 rounded-md w-full py-3 px-5 outline-0 text-gray-950'
          />
          <input
            type='email'
            placeholder='Can I get Your Email?...'
            className='border-2 border-gray-200 rounded-md w-full py-3 px-5 outline-0 text-gray-950'
          />
          <input
            type='number'
            placeholder='How about your phone number?...'
            className='border-2 border-gray-200 rounded-md w-full py-3 px-5 outline-0 text-gray-950'
          />
          <textarea
            rows={6}
            placeholder='What would you like to tell me?...'
            className='border-2 border-gray-200 rounded-md w-full py-3 px-5 outline-0 text-gray-950'
          />
          <button className='bg-gray-950 my-3 cursor-pointer text-white text-sm justify-center items-center py-3 flex gap-[5px] px-7 rounded-full'>
            Shoot <img src='PaperPlaneTilt.png' className='h-[17px]' alt='send icon' />
          </button>
        </form>

        <div className='text-sm text-gray-500 mb-9 mt-6 text-center'>
          2025 @ therealteejay25
        </div>
      </div>
    </div>
  )
}

export default Contact
