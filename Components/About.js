import React from 'react'
import Section from './Section'

export default function About({data}) {
  const About = data.about;
  // console.log(About)
  const AboutData = {
    Title:'',
    Description: ''
  }

  return (
    <Section>
      <div className=' xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full  flex items-center justify- relative px-6'>
        <div className='bg-black mr- w-[85%] lg:w-[80%] lg:h-fit bg-gradient-to-tr from-2% from-[#39055D] to-100% to-[#090C25] rounded-[30px] flex flex-col gap-5 px-7 py-12' >
            <h2 className='font-oi xl:text-[45px] lg:text-[40px] md:text-[35px] text-[30px] '>{About.title}</h2>
            <div className='flex-col flex md:w-[85%] gap-10 xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs'dangerouslySetInnerHTML={{__html: About.paragraph.html}}>
            </div>
        </div>
        <div className='w-[50%] bottom-[-240px] left-20 h-[50%] opacity-50 absolute rounded-full bg-[#516FCB] -z-20 blur-[100px] shadow-2xl	'></div>
        </div>
    </Section>
  )
}
