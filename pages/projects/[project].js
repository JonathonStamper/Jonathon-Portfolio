import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { useRouter } from 'next/router'
import SEO from '../../Components/SEO'



export default function ProjectPage(props) {
  const {project} = props
  const router = useRouter()
      {console.log(project)}

  return (
    <>
     <SEO
       TITLE ={` Jonathon Stamper - Project: ${project.projectName}`}
       DESCRIPTION = {`This project is called ${project.projectName}`}
       URL = {`/projects/${project.projectSlug}`}
       KEYWORDS = {`Projects, Project, Coding, ${project.projectName}`}/>
       
    <nav className='fixed top-0 left-0 bg-[#090515] w-screen h-[55px] z-20 opacity-70 flex items-center'> <button onClick={() => {router.back()}} className='w-8 lg:w-12 absolute left-[10%]'> <ArrowSVG/></button></nav>
    <main className='text-white bg-[#3B21A1] p'>
      {/* semi-navbar */}

    {/* hero section */}
    <section className='relative flex justify-center w-full bg-gradient-to-t to-[#090515] from-[#3B21A1] h-screen lg:mb-20'>  
    {/* background image */}
        <div className='h-screen w-screen relative overflow-hidden flex justify-center items-center px-6 rounded-[60px]'><img src={project.coverImage[0].url}  className='w-fit h-fit  lg:h- rounded-[40px] lg:rounded-[60px] '/>
         
         <div className='absolute top-[65%] left-[10%] z-20'>
          <h2 className='tracking-wider	 font-oi xl:text-[45px] lg:text-[40px] md:text-[35px] text-[30px] '> {project.projectName}</h2>
          {/* tags */}
          <div className={`flex gap-3 flex-wrap md:gap-5 `}>
          {project.technologies.map((item, index) => {
        return(
        <div key={index} style={{backgroundColor: item.colorCode}} className={` font-semibold rounded-2xl p-3 px-4 font-outfit xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs flex gap-2 `}>
          {item.techniqueName}</div>
        )})}
        </div>
        </div>
        </div>

        <div className='opacity-50 bg-gradient-to-t to-[#090515] from-[#3B21A1] h-screen w-full absolute z-10'></div>
    </section>

    
    <section className='bg-gradient-to-b to-[#160C3B] from-[#3B21A1] flex flex-col justify-center items-center'>
      {/* Project description */}
      <div className='px-6 xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center justify-center'>
        <div>
      <h2 className='tracking-wider	text-left font-oi xl:text-3xl lg:text-2xl md:text-xl text-lg mb-5 '>Project description</h2>
      <div className='flex flex-col gap-3 md:w-[78%]' dangerouslySetInnerHTML={{__html: project.projectDescription.html}}>

      </div>
      </div>
      </div>


      {/* Project Images */}
      <div className='my-8 md:my-20 xl:w-[1280px] lg:w-[1024px] px-6 md:w-[768px] sm:w-[640px] flex flex-col items-center justify-center gap-7 md:gap-20'>
        {project.projectImages.map((item, index) => 
          (<img key={index} src={item.url} className='rounded-[15px] lg:rounded-[30px]'/>)
          )}
        </div>
      
    </section>
    </main>
    </>
  )
}

const ArrowSVG = () =>{
  return(
    <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{fill:'#ffffff'}} d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" fill='white' data-name="Left"/></svg>
  )
}

const graphcms = new GraphQLClient(
  process.env.HYGRAPH_ENDPOINT
)

  const PathQuery = gql`query MyQuery {
    projects {
      projectSlug
    }
  }
  
  `

  export async function getStaticPaths(){
    const {projects} = await graphcms.request(PathQuery)
    return{
      paths: projects.map((project) => ({params: {project: project.projectSlug}})),
      fallback: false
    }
  }
  
  const Query = gql`query MyQueryquery($slug: String!) {
    project(where: {projectSlug: $slug}) {
      projectName
      projectSlug
      technologies {

        techniqueName
        colorCode
        techniqueImage {
          altText
          caption
          url
        }
      }
      projectDescription {
        html
      }
      coverImage {
        altText
        caption
        url
      }
      projectImages {
        altText
        caption
        url
      }
    }
  }
  
    
  `;

export async function getStaticProps({params}){
  const slug = params.project
  const data = await graphcms.request(Query, {slug})
  console.log(data)
  const project = data.project
  return {props:{
    project
  },
  revalidate: 10
}
}

