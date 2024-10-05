import Link from "next/link";

export default function Error() {
    return (
  <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#090C25] to-[#39055D]">
      <div className='flex justify-center gap-4  items-center flex-col'>
        <h2 className='text-[34px] text-white md:text-[44px] lg:text-[56px] font-bold'>Something went wrong with the forms</h2>
        <p className="text-lg text-white md:text-xl lg:text-2xl font-bold">try emailing me manually: </p>
        <div className='flex gap-5 items-center flex-wrap'>
            <Link href={'https://nl.linkedin.com/in/jonathon-stamper-945b0b266'} target='_blank'><LinkedIn key={''}/></Link> 
            <Link href={`mailto:jonathon.a.stamper@gmail.com`}><Mail key={''}/></Link>
            </div>
        <Link className="transition-all ease-in-out duration-[200ms] text-white bg-[#6C55CC] hover:bg-[#4d3c8f] px-6 py-3 w-fit rounded-md text-[16px] font-semibold active:scale-90" href="/">Back to homepage</Link>
      </div>
    </section>  )
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