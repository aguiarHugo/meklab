'use client'

import Image from 'next/image'
import logo from '../public/logo.png'
import water from '../public/water.jpg'

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className='relative'>
      <Image
        className='absolute -z-40 w-full h-screen'
        src={water}
        alt='waterbg'
      />
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='ml-8 sm:ml-24 flex flex-col pt-80'>
        <Image
          src={logo}
          alt='Meklab'
          className='w-80 sm:w-[400px]'
        />
        <p className='text-[18px] sm:text-[32px] text-dark-100 ml-8 sm:ml-12'>Nunca mais se preocupe com a sua água!</p>
      </motion.div>
    </main>
  )
}
