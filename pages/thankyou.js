import Link from "next/link";
import SEO from "../Components/SEO";

export default function Thankyou() {
    return (
      <>
          <SEO
       TITLE = "Jonathon Stamper - contact"
       DESCRIPTION = "Thank you for contacting me, I will get back to you as soon as possible"
       URL = "/thankyou"
       KEYWORDS = "Jonathon, Stamper, Jonathon Stamper, Portfolio, Software Engineer, Developer, contact, contacting, form, thank you"/>
  <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#090C25] to-[#39055D]">
      <div className='flex justify-center  items-center flex-col'>
        <h2 className='text-[34px] text-white md:text-[44px] lg:text-[56px] font-bold'>Thank you for contacting me!</h2>
        <Link className="transition-all ease-in-out duration-[200ms] text-white bg-[#6C55CC] hover:bg-[#4d3c8f] px-6 py-3 w-fit rounded-md text-[16px] font-semibold active:scale-90" href="/">Back to homepage</Link>
      </div>
      
    </section>
    </>  )
  }