import React from 'react'
import Section from './Section'
import Link from 'next/link'

export default function Contact() {
  const SVGList = [<GithubSVG key={''}/>, <LinkedIn key={''}/>, <Mail key={''}/>]
  return (
<Section>
<div className='font-outfit xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full  flex items-center justify-center relative px-6'>
        <div className='bg-black  w-full  lg:h-fit bg-gradient-to-b from-2% from-[#39055D] to-100% to-[#090C25] rounded-[30px] flex md:flex-row flex-col justify-between gap-14 p-8 md:p-10 lg:px-12 lg:py-12' >
           {/* Text section */}
           <div className='flex flex-col gap-4 w-full md:w-[45%] lg:w-[42%]'>
            <h3 className='font-oi xl:text-[38px] lg:text-[30px] md:text-[28px] text-[24px]  '>
            Lets connect  🤝
            </h3>
            
            {/* Paragraph */}
            <div className='flex flex-col gap-4 lg:text-xl md:text-md text-sm'>
              <p>I am always looking for opportunities to expand and gain new work experiences. If you’re interested in working together and have a interesting project to work on</p>
              
              <div className='flex gap-4 items-center'>
              then contact me 
                <div className=''><Arrow/></div>
              </div>
            </div>

            {/* Social links */}
            <div className='flex gap-5 items-center flex-wrap'>
            <Link href={'https://github.com/JonathonStamper'} target='_blank'><GithubSVG key={''}/></Link> 
            <Link href={'https://nl.linkedin.com/in/jonathon-stamper-945b0b266'} target='_blank'><LinkedIn key={''}/></Link> 
            <Link href={`mailto:jonathon.a.stamper@gmail.com`}><Mail key={''}/></Link>
            </div>
           </div>

            {/* Contact form */}
           <div className='font-oi lg:text-3xl md:text-xl text-lg lg:w-[40%] flex-col flex gap-4'>
            <h3 className='xl:text-[38px] lg:text-[30px] md:text-[28px] text-[24px] '>Contact me</h3>
            <form name="contact" method="POST" data-netlify="true" className='flex flex-col w-full text-[#656565] font-outfit gap-5 xl:text-lg lg:text-base md:text-md text-sm'>
                <input required type='text' name='name' placeholder='Name' className='bg-white w-full h-12 flex items-center rounded-xl p-5 '/>
                <input  required type='email' name='email' placeholder='Email' className='bg-white w-full h-12 flex items-center rounded-xl p-5 lg:text-[16px]'/>
                <input  required type='text' name='subject' placeholder='Subject' className='bg-white w-full h-12 flex items-center rounded-xl p-5 lg:text-[16px]'/>
                <textarea required  name='message' placeholder='Message' className='bg-white w-full flex items-centr rounded-xl px-5 py-4  lg:text-[16px] h-[220px]'/>
                <input  type='submit' className='w-fit py-2 px-5 lg:text-[16px] bg-[#6C55CC] text-white rounded-xl' value='Submit'/>
            </form>
           </div>


        </div>


        <div className='w-[50%] top-[-240px] left-20 h-[50%] opacity-50 absolute rounded-full bg-[#516FCB] -z-20 blur-[100px] shadow-2xl	'></div>
        </div>
    </Section>  )
}

const GithubSVG = () =>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
  <path fill="#fff" d="M24 0C10.74 0 0 10.74 0 24c0 10.62 6.87 19.59 16.41 22.77 1.2.21 1.65-.51 1.65-1.14 0-.57-.03-2.46-.03-4.47-6.03 1.11-7.59-1.47-8.07-2.82-.27-.69-1.44-2.82-2.46-3.39-.84-.45-2.04-1.56-.03-1.59 1.89-.03 3.24 1.74 3.69 2.46 2.16 3.63 5.61 2.61 6.99 1.98.21-1.56.84-2.61 1.53-3.21-5.34-.6-10.92-2.67-10.92-11.85 0-2.61.93-4.77 2.46-6.45-.24-.6-1.08-3.06.24-6.36 0 0 2.01-.63 6.6 2.46 1.92-.54 3.96-.81 6-.81s4.08.27 6 .81c4.59-3.12 6.6-2.46 6.6-2.46 1.32 3.3.48 5.76.24 6.36 1.53 1.68 2.46 3.81 2.46 6.45 0 9.21-5.61 11.25-10.95 11.85.87.75 1.62 2.19 1.62 4.44 0 3.21-.03 5.79-.03 6.6 0 .63.45 1.38 1.65 1.14A24.036 24.036 0 0 0 48 24C48 10.74 37.26 0 24 0Z"/>
</svg>

)
}

const LinkedIn = ()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill="#fff" fill-rule="evenodd" d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z" clip-rule="evenodd"/>
    <path fill="#381564" fill-rule="evenodd" d="M17.508 35.058V20.42h-4.525v14.64h4.525Zm0-19.828c-.027-1.31-.9-2.307-2.318-2.307-1.42 0-2.346.997-2.346 2.307 0 1.282.9 2.308 2.291 2.308h.027c1.446 0 2.346-1.026 2.346-2.308Zm7.382 19.828v-8.34c0-.447.032-.893.163-1.211.359-.893 1.176-1.816 2.547-1.816 1.797 0 2.923 1.02 2.923 3.027v8.34h4.555v-8.564c0-4.587-2.449-6.722-5.715-6.722-2.678 0-3.854 1.498-4.507 2.517l.033-1.958h-4.547c.065 1.401 0 14.727 0 14.727h4.548Z" clip-rule="evenodd"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h48v48H0z"/>
    </clipPath>
  </defs>
</svg>

  )
}

const Mail = () =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="36" fill="none" viewBox="0 0 52 36">
  <path fill="#fff" d="M50 12a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14a2 2 0 0 0-4 0v16a6 6 0 0 0 1.76 4.24A6 6 0 0 0 6 36h40a6 6 0 0 0 4.24-1.76A6 6 0 0 0 52 30V14a2 2 0 0 0-2-2Z"/>
  <path fill="#fff" d="M24.799 23.6a2 2 0 0 0 2.4 0l23.62-17.72a2 2 0 0 0 .6-2.46 6.123 6.123 0 0 0-1.18-1.66A6 6 0 0 0 45.999 0h-40a6 6 0 0 0-4.24 1.76 6.12 6.12 0 0 0-1.18 1.66 2 2 0 0 0 .6 2.46l23.62 17.72ZM5.999 4h40a1.8 1.8 0 0 1 .56 0l-20.56 15.5L5.439 4a1.8 1.8 0 0 1 .56 0Z"/>
</svg>

  )
}

const Arrow = () =>{
  return(
    <svg className='w-10 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:'#ffffff'}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" fill='white' data-name="Left"/></svg>

  

  )
}