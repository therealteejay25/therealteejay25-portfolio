"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Socials = () => {
  return (
    <div className='flex bottom-7 z-100 fixed items-center justify-center'>
        <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }}
        href='#' className='flex justify-center items-center p-[10px] bg-neutral-700 rounded-full mx-5'>
            <img className='h-4' src="facebook.svg" alt="" />
        </motion.a>
        <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } }}
        href='https://instagram.com/therealteejay25' className='flex justify-center items-center p-[10px] bg-neutral-700 rounded-full mx-5'>
            <img className='h-4' src="InstagramLogo.png" alt="" />
        </motion.a>
        <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } }}
        href='https://x.com/therealteejay25' className='flex justify-center items-center p-[10px] bg-neutral-700 rounded-full mx-5'>
            <img className='h-4' src="XLogo.png" alt="" />
        </motion.a>
        <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } }}
        href='#' className='flex justify-center items-center p-[10px] bg-neutral-700 rounded-full mx-5'>
            <img className='h-4' src="LinkedinLogo.png" alt="" />
        </motion.a>
    </div>
  )
}

export default Socials