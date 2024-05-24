import React from 'react'
import Section from './Section'
import Laptop from '../public/laptop.jpeg'
import Monitor from '../public/MonitorImage.png'
import {Image} from 'next/image'

export default function Expertis({data}) {
  const sections = [{
    Image: '../public/LaptopImage.png',
    Title: 'Software development',
    Paragraph: 'I have experience with functional programming using languages such as Javascript, C#, Java, and Python to create sustainable software. I’ve gained these experiences through my studies and professional ventures.',
    
  },
  {
    Image: Monitor,
    Title: 'Front-End Development',
    Paragraph: 'I also have experience working with HTML, CSS, and different front-end frameworks, such as React, Next JS, and Vue to create responsive and user-friendly websites.',
    
  }
]
  

  function ExpertSection({Title, Paragraph, Image} ){
    return(
      <div className='flex lg:items-center flex-col lg:flex-row gap-7 w-full sm:w-[45%] md:w-[50%] -z-20 p-5 bg-gradient-to-br from-2% from-[#39055D] to-70% to-[#090C25] rounded-[30px]'>
        <img className='xl:w-[185px] xl:h-[185px] lg:w-[135px] lg:h-[130px] w-[105px] h-[105px]' src={Image}/>
        <div className='flex font-outfit flex-col gap-4 lg:w-[350px]'>
            <h4 className='xl:text-xl lg:text-lg md:text-base font-bold'>{Title}</h4>
            <p className=' xl:text-base lg:text-sm  sm:text-xs text-[10px]'>{Paragraph}
</p>
        </div>

       </div>
    )
  }


  return (
    <Section>
      <div className='font-oi xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] min -z-20 w-full md:flex flex-col mb-80 sm:mb-0 items-cen justify-center px-6'>
              <h2 className='text-oi xl:text-[45px] mb-6 lg:text-[40px] md:text-[35px] text-[30px]'>Expertise</h2>
<div className='w-full flex flex-col sm:flex-col gap-5'>
    	{data.name.map((item, index) => (<ExpertSection key={index} Title={data.name[index]} Paragraph={data.description[index]} Image={data.image[index].url}></ExpertSection>))}
       </div>
       
      </div>
    </Section>
  )
}

const LaptopSVG = ()=> {

}