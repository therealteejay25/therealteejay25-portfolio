import React from 'react'

const Socials = () => {
  return (
    <div className='flex bottom-10 z-100 fixed items-center justify-center'>
        <a href='#' className='flex justify-center items-center p-[10px] bg-gray-900 rounded-full mx-5'>
            <img className='h-4' src="FacebookLogo.png" alt="" />
        </a>
        <a href='#' className='flex justify-center items-center p-[10px] bg-gray-900 rounded-full mx-5'>
            <img className='h-4' src="InstagramLogo.png" alt="" />
        </a>
        <a href='#' className='flex justify-center items-center p-[10px] bg-gray-900 rounded-full mx-5'>
            <img className='h-4' src="XLogo.png" alt="" />
        </a>
        <a href='#' className='flex justify-center items-center p-[10px] bg-gray-900 rounded-full mx-5'>
            <img className='h-4' src="LinkedinLogo.png" alt="" />
        </a>
    </div>
  )
}

export default Socials