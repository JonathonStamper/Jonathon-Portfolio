import React from 'react'
import Section from './Section'
import {motion} from 'framer-motion'
import { damp } from 'three/src/math/MathUtils.js'
import Navbar from './Navbar'

export default function Hero(props) {
  const  {data} = props
  //  from-[#3A055D] from-0% to-[#0C0C29] bg-gradient-to-br to-70%
  return (
<Section>
        <Navbar/>
        <div className='font-oi xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col justify-center gap-5 sm:flex-row items-center sm:justify-between px-6'>
          <motion.div className='flex flex-col xl:min-w-[585px] lg:min-w-[485px] md:w-[380px] sm:w-[320px]' initial={{ x: -120 }} 
        whileInView={{ x: 0 }} transition={{duration:1, bounce:1}}>
            <div className='tracking-wide	'>
            <span className='xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px]'>
              Hi, {} 
            </span>

          <span className='xl:text-[32px] lg:text-[26px] md:text-[24px] sm:text-[18px] text-base '>
              my name Is
            </span>

            <h1 className='xl:text-[72px] lg:text-[64px] md:text-[50px] sm:text-[42px] text-[38px]'>
              Jonathon
            </h1>
            </div>
            

            <p className='font-outfit xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs mt-[70x]'>
            {data.heroSubtext}
            </p>
            </motion.div>
        
            <div className='lg:w-[550px] lg:h-[550px] md:w-[350px] md:h-[350px] opacity-50 absolute rounded-full bg-[#516FCB] -z-10 blur-[95px] shadow-2xl	'></div>
        
            {/* <div className='absolute -z-10 h-screen w-screen'><BG/></div> */}

            <div className='flex flex-col gap-5 lg:gap-10 w-full'>
            <motion.div className='flex flex-col xl:gap-6 gap-3 sm:rotate-180 w-full' >
              <div className='xl:w-[500px] lg:w-[350px] md:w-[250px] sm:w-[150px] w-[80%] rounded-md bg-[#516FCB] h-4 blur-[2px]'></div>
              <div className='xl:w-[430px] lg:w-[250px] md:w-[150px] sm:w-[50px] w-[50%] bg-[#4C3A8F] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[280px] lg:w-[175px] md:w-[100px] sm:w-[90px] w-[90%] bg-[rgb(127,71,169)] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[400px] lg:w-[250px] md:w-[250px] sm:w-[120px] w-[60%] bg-[#3B055F] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[530px] lg:w-[380px] md:w-[280px] sm:w-[180px] w-[90%] bg-[#4C3A8F] h-4 rounded-md blur-[2px]'></div>
      </motion.div>
      <div className='flex flex-col xl:gap-6 gap-3 sm:rotate-180'>
              <div className='xl:w-[500px] lg:w-[350px] md:w-[250px] sm:w-[150px] w-[80%] rounded-md bg-[#516FCB] h-4 blur-[2px]'></div>
              <div className='xl:w-[430px] lg:w-[250px] md:w-[150px] sm:w-[50px] w-[50%] bg-[#4C3A8F] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[280px] lg:w-[175px] md:w-[100px] sm:w-[10px] w-[90%] bg-[#340657] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[400px] lg:w-[250px] md:w-[250px] sm:w-[120px]  w-[60%] bg-[#3B055F] h-4 rounded-md blur-[2px]'></div>
              <div className='xl:w-[530px] lg:w-[380px] md:w-[280px] sm:w-[180px] w-[90%] bg-[#4C3A8F] h-4 rounded-md blur-[2px]'></div>
      </div> 
      </div>

      </div> 
</Section>  
)
}

const BG = ()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' fill="none" viewBox="0 0 1440 715">
  <path fill="url(#a)" d="M0 0h1440v693.471C706.075 815.447 366 355.498 0 501.702V0Z"/>
  <defs>
    <linearGradient id="a" x1="720" x2="800.719" y1="0" y2="443.581" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3A055D"/>
      <stop offset=".918" stop-color="#0C0C29"/>
    </linearGradient>
  </defs>
</svg>

  )
}