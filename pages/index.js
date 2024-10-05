import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Model } from '../Components/3dModel'
import { CameraControls, CameraShake, Center, Float, Html, MeshTransmissionMaterial, OrbitControls, Scroll, ScrollControls, Text, Text3D, useHelper, useScroll } from '@react-three/drei'
import Interface from '../Components/Interface'
import { use, useEffect, useRef, useState } from 'react'
import ScrollManager from '../Components/ScrollManager'
import Navbar from '../Components/Navbar'
import { MotionConfig } from 'framer-motion'
import HeroModel from '../Components/HeroModel'
import { GraphQLClient, gql } from 'graphql-request'
import { AmbientLight, MeshBasicMaterial, MeshStandardMaterial, PointLightHelper } from 'three'
import HeroModelV2 from '../Components/HeroModelV2'



export default function Home(props) {

  const projects = props.projects
  const homepage = props.pages[0]
  const [section, setSection] = useState(0);
  const scroll = useScroll()


  // console.log(homepage.hero.heroSubtext)

  //Navbar
  const NavbarHtml = () =>{
    const {viewport} = useThree()
    const scroll = useScroll()
    console.log(scroll)
    console.log(viewport)

    // useFrame(() =>{
    //   console.log(scroll.scroll.current * scroll.pages)
    // })

    return(
      <Html style={{
        position: 'fixed',
        width: '100%',
        zIndex: 1000, // Ensure it's above other elements
      }} fullscreen  className='center' > 
  <Navbar onSectionChange={setSection} section={section}/>
      </Html>

    )
  }


  //Camera controls
  const CameraController = () => {
    const control = useRef()
    // const [isAnimating, setIsAnimating] = useState(true)

    async function intro() {
      control.current.dolly(-2)
      control.current.smoothTime = 1.6
      control.current.dolly(2, true)
    }

    useFrame((state) => {
      // if (control.current._isUserControllingDolly === true || control.current._isUserControllingOffset === true 
      // || control.current._isUserControllingRotate === true || control.current._isUserControllingTruck === true || control.current._isUserControllingZoom === true){
      //     setIsAnimating(false)
      // }
    })

    useEffect(() => {
      intro()
      // if (control.current._isUserControllingDolly === true || control.current._isUserControllingOffset === true 
      //   || control.current._isUserControllingRotate === true || control.current._isUserControllingTruck === true || control.current._isUserControllingZoom === true){
      //       setIsAnimating(false)
      //       return
      //   }


    }, [])

    return (
      <CameraControls ref={control} enabled={false} />
    )
  }


  const Texter = () => {
    const screen = useThree()
    const ligth = useRef()
    const threeText = useRef()
    const [Mobiel, setMobiel] =useState()
    
    const Mobile = window.innerWidth < 640
    const smScreen = window.innerWidth < 768 && window.innerWidth >= 640;
    const mdScreen = window.innerWidth < 1024 && window.innerWidth >= 768;
    const lgScreen = window.innerWidth < 1280 && window.innerWidth > 1024;
    const xlScreen = window.innerWidth > 1280 
    const AvatarScalingFactor = Math.min(Math.max(window.innerWidth / 1410, 0.55), 0.9)

    useEffect(() =>{
          setMobiel(alt=>screen.viewport.width <= 640)
          // console.log('hellooooo resizin', screen.viewport.width)
        
    } ,[screen.viewport.width])

    const TextRatio = screen.viewport.width / 3.5
    const MINMAXText = Math.min(Math.max(window.innerWidth / 1410, 0.55), 0.9)
    
    

    // useHelper(ligth, PointLightHelper, 0.5, "hotpink")
    // console.log(threeText)
    return (
      <group scale={MINMAXText} position={[Mobile === true ? screen.viewport.height * 0.2 : 0, -2.33, 3]}>
        {/* <group >
          <Text position={[-1.8, 0, 0]} fontSize={0.2}
            font={'Fonts/Oi-Regular.ttf'}
            curveSegments={24}
            brevelSegments={1}

            bevelThickness={0.03}
            height={0.5}
            lineHeight={0.9}
            letterSpacing={0}>Hi,
          </Text>

          <Text position={[-0.9, -.02, 0]} fontSize={0.14}
            font={'Fonts/Oi-Regular.ttf'}
            curveSegments={24}
            brevelSegments={1}

            bevelThickness={0.03}
            height={0.5}
            lineHeight={0.9}
            letterSpacing={0}>my name is
          </Text>
        </group> */}

        <Text ref={threeText} receiveShadow={true}  position={[0, -0.36, 0]} rotation={[0, 0.02, 0]} fontSize={0.15} font={'Fonts/Cherry.ttf'}

          // maxWidth={[-w / 5, -h * 2, 3]}
          curveSegments={24}
          brevelSegments={1}
          
          bevelThickness={0.03}
          lineHeight={0.9}
          letterSpacing={0.01}
        >
                      <meshBasicMaterial color="white"/>

          Jonathon Stamper

        </Text>
       <Text
           fontSize={0.06}
          maxWidth={2}
          position={[0,-0.5,0]}
          fontWeight={500}
          curveSegments={24}
          brevelSegments={3}

          bevelThickness={0.3}
          height={0.2}
          lineHeight={1.5}
          >
            <meshBasicMaterial color="#FFFFF"/>
          Fullstack Developer
          </Text>
        {/* <pointLight position={[-1, -0.3, -.4]} ref={ligth} color={'#516FCB'} scale={0.5} intensity={25} /> */}

      </group>
    )
  }



  return (
    <>     

      {/* <section  className={`overflow-hidden w-full h-screen bg-gradient-to-r from-[#090C25] to-[#39055D] `}> */}
      <section  className={`overflow-hidden w-full h-screen bg-gradient-to-r from-[#090C25] to-[#39055D] `}>

      	{/* <Navbar onSectionChange={setSection} section={section}/> */}

        <MotionConfig transition={{
          type: 'spring',
          mass: 5,
          stiffness: 100,
          damping: 50,
          restDelta: 0.001
        }}>


          <Canvas className={`w-full bg h-screen bg-gradient-to-r from-[#151637] to-[#0D0214]`} camera={{ fov: 30, near: 0.1, far: 1000 }}>
          {/* <Canvas className={`w-full bg h-screen bg-gradient-to-r from-[#090C25] to-[#39055D]`} camera={{ fov: 30, near: 0.1, far: 1000 }}> */}

            {/* <Html   prepend='false' className='center fixed'  occlude='' castShadow={true} receiveShadow={true} fullscreen > <Navbar onSectionChange={setSection} section={section}/> </Html> */}
            {/* <CameraController /> */}
            {/* <fog attach={'fog'} args={['#39055D', 3, 5]}/> */}
            {/* <CameraShake intensity={0.6}/> */}
            {/* <mesh>
              <torusGeometry />
              <meshStandardMaterial color={'white'} />
              <MeshTransmissionMaterial roughness={0}  transmission={0.9} ior={1.2} chromaticAberration={0.02} backside={true} thickness={1}/>
            </mesh> */}

            {/* Lights */}
            <directionalLight position={[10, 1, 1]} intensity={1.5} color={'#8fabff'} />
            <ambientLight intensity={0.15} />
            <hemisphereLight skyColor='#090C25' groundColor='#340657' />
            <pointLight intensity={3} position={[0, 0, -2]} />

            {/* <mesh>
          <boxGeometry/>
          <meshStandardMaterial/>
         </mesh> */}
            {/* Stuff that needs to be scrolled */}
            <ScrollControls damping={'0.1'} pages={'6'}>
              <ScrollManager section={section} onSectionChange={setSection} />

              <Scroll>
                {/* <Texter></Texter> */}
              </Scroll>
            {/* <NavbarHtml/> */}

              {/* Main 3d Model */}
              <Float  floatIntensity={0.2} floatingRange={0.2} rotationIntensity={0.2}>
                {/* <HeroModel  section={section} /> */}
                <HeroModelV2  section={section} />

              </Float>

              {/* <Scroll html > */}
              <Html onOcclude={'blending'} className='center' position={[0, 0, -6]} occlude="blending" castShadow={true} receiveShadow={true} fullscreen ><Interface onSectionChange={setSection} section={section} projects={projects} page={homepage} /> </Html>

              {/* </Scroll> */}

            </ScrollControls>
          </Canvas>

        </MotionConfig>
      </section>
    </>
  )
}

{/* <mesh>
          <sphereGeometry/>
          <meshBasicMaterial color={'blue'}/>
        </mesh> */}

{/* {scroll.offset > (1/ (scroll.pages -1) * 2) && <Scroll>
        <group position={[0,0, 1]}>
        <Model section={section}/>
        </group>
       </Scroll>}

       {scroll.offset  (1/ (scroll.pages -1) * 2) && 
        <group position={[0,0, 1]}>
        <Model section={section}/>
        </group>
        } */}

const graphcms = new GraphQLClient(
  process.env.HYGRAPH_ENDPOINT
)

const Query = gql`query Projects {
          projects {
            projectName
            projectSlug
            projectDescription {
              html
            }
            coverImage {
              altText
              caption
              url
            }
            projectImages {
              url
              caption
              altText
            }
            technologies {
              techniqueName
              techniqueImage {
                url
                altText
                caption
              }
              colorCode
            }
          }
          pages {
            about {
              paragraph {
                html
              }
              title
            }
            expertise {
              name
              image {
                url
                caption
                altText
              }
              description
            }
            hero {
              heroSubtext
            }
          }
        }
        
        `;

export async function getStaticProps() {
  const { projects, pages } = await graphcms.request(Query)
  return {
    props: {
      projects,
      pages
    },
    revalidate: 10
  }
}

