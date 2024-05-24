import React, { useState } from 'react'
import Section from './Section'
import Laptop from '/public/laptop.jpeg'
import Link from 'next/link'
import Image from 'next/image'



export default function Projects(props) {
  const {projects} = props
  // console.log(projects)
  const projectList = [
    {Title: '',
    Desciption: '',
    Image: '',
    Skills: ['','',''],
    Images: []
  },

  {Title: '',
  Desciption: '',
  Image: '',
  Skills: ['','',''],
  Images: []
},
{Title: '',
Desciption: '',
Image: '',
Skills: ['','',''],
Images: []
},
{Title: '',
Desciption: '',
Image: '',
Skills: ['','',''],
Images: []
},
{Title: '',
Desciption: '',
Image: '',
Skills: ['','',''],
Images: []
}]
  const [viewAll, setViewAll] = useState()


  
  return (
<Section> 
  <div className='font-oi sm:flex h- justify-center items-center w-screen rounded-br-[200x]'>
      <div className=' xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] md:flex flex-col min-h-screen items- justify- px-6'>
        <h2 className='font-oi xl:text-[45px] lg:text-[40px] md:text-[35px] text-[30px]'>Projects</h2>
        <div className='w-full h-f flex gap-5 md:gap-7 lg:gap-8 xl:gap-7 mt-5 flex-wrap'>
            {projects.map((item, index) => (
              <Project project={item} key={index}/>
            ))}
            {/* <Project absolute={true} left='' right='' top='' bottom='' />
            <Project absolute={true} left='200' right='' top='' bottom='' />
            <Project absolute={true} left='' right='' top='' bottom='' />
            <Project absolute={true} left='' right='' top='' bottom='' />
            <Project absolute={true} left='' right='' top='' bottom='' /> */}
        </div>
        <div></div>
      </div>

</div>    </Section>  )
}

const Project = (props) =>{
  const {project} = props
  const [hover, setHovered] = useState()
  // console.log('test', project)

  return(<>
    <Link href={`/projects/${project.projectSlug}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`relative md:gap-5 w-full sm:w-[48.3%] md:w-[48%] lg:w-[48%] xl:w-[31.5%] md:h-[] sm:h-[250px] h-[300px] lg:h-[370px] xl:h-[320px] opacity-100 z transition-all duration-300 hover:opacity-70 bg-[#64258F] rounded-[30px] p-5 flex flex-col sm:flex-row items-center justify-center `}>
      
      <div className={`w-full transform-all flex p-2  justify-center  overflow-hidden items-center h-[95%] opacity-  `}>        
        <img className={`w-full h-[100%] object-cover absolute object-center rounded-[30px] transition-all duration-300`} src={project.coverImage[0].url}/>
        
        <div className='absolute right-0 bottom-0 p-5 flex flex-wrap gap-2 '>
      {project.technologies.map((item, index) => {
        // console.log('heyoooo', item.colorCode);
        return(
        <div key={index} style={{backgroundColor: item.colorCode}} className={`bg-[${item.colorCode}] ${hover ? 'block':'hidden'} rounded-md p-3 font-outfit text-sm flex gap-2 `}>
          {item.techniqueName}</div>
      )
})}
      </div>
      </div>

      

      {/* <h3 className={`${hover ? 'block':'hidden'} text-sm top-0 left-0 p-5`}>{project.projectName}</h3> */}
    </Link>    
    </>)
  }