import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { Model } from './3dModel'
import {motion } from "framer-motion-3d"
import { Scroll, useScroll } from '@react-three/drei'
import { Model_Env } from './Model_Env'
import { Me_Model } from './Final_Model'

export default function HeroModel(){
    // const {section} = props
    
    const scroll = useScroll()
    const [section, setSelection] = useState(0)
    const {viewport} = useThree()
    const [currentAnimation, setCurrentAnimation] = useState('Typing')
    const viewportDiagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    const [scalingFactor, setScalingFactor] = useState(1);

    const calculateScalingFactor = () => {
      const width = window.innerWidth;
     
      const newScalingFactor = Math.min(Math.max(width / 1100, 0.5), 0.75);
      setScalingFactor(newScalingFactor);
    };
  
    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newScalingFactor = Math.min(Math.max(newWidth / 1100, 0.5), 0.75);
        console.log('Width:', newWidth, 'Scaling Factor:', newScalingFactor);

        setScalingFactor(newScalingFactor);
      };
  
      // Set initial scale
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    console.log(scalingFactor)

    const mobile = window.innerWidth < 640
    const smScreen = window.innerWidth < 768 && window.innerWidth >= 640;
    const mdScreen = window.innerWidth < 1024 && window.innerWidth >= 768;
    const lgScreen = window.innerWidth < 1280 && window.innerWidth > 1024;
    const xlScreen = window.innerWidth > 1280 
    const AvatarScalingFactor = Math.min(Math.max(viewport.width / 12, 0.5), 0.75)
    // console.log(viewportDiagonal/1280)

    const AvatarScalingFactorW = Math.min(Math.max(viewport.width / 5 * 0.9, 0.5), 0.85)
    const AvatarScalingFactorH = Math.min(Math.max(window.innerHeight / 1100, 0.5), 0.75)
    //  console.log(Math.min(Math.max(window.innerWidth / 1100, 0.5), 0.75))

    console.log(viewport.height)

    

    // const EnvResponseRatio = viewport.width / 2.4
    // const EnvRatio = Math.max(0.6, Math.min(0.6*EnvResponseRatio, 0.90) )
    // const AvatarRatio = Math.max(0.6, Math.min(0.6*AvatarResponseRatio, 0.95) )
    
    useFrame(() => {
        // console.log(scroll.offset)
        // console.log(1/ (scroll.pages -1) * 2)
        // console.log(scroll.offset > (1/ (scroll.pages -1) * 1))
        const currentSection = Math.floor(scroll.scroll.current * scroll.pages)

        if(currentSection !== section){
            setSelection(currentSection)
        }

    })

    useEffect(() =>{
      if(section === 2){
        setCurrentAnimation('Posing')
        return
      }
      setCurrentAnimation('Typing')
    }, [section])
  return (
  
    <>
  {/*  <motion.group position={[0,-1.8,3]} rotation={[0,Math.PI,0] animate={{z: section  < 1 ? 0 : 2,}}>
     <Model/>
     </motion.group> */}
        <Scroll className={`z-20 `}>
        
        {/* Laptop model */}
        <motion.group position={[0 , mobile ? -1.2 : smScreen ? -1.25 : mdScreen ? -1.3 : -1.8 , 3]} rotation={[0,0 ,0]} scale={AvatarScalingFactorW}
        animate={'' + section} 
        variants={{1: {
          rotateY: Math.PI * -1.15,
          y: mobile ?  -viewport.height * 1.3 : smScreen ? -viewport.height * 1.2 : mdScreen ? -viewport.height * 1.2 : -viewport.height * 1.4,
          x: mobile ? 0 : Math.min(viewport.width * 0.2, 1.2),
          z: 1,
      }, 
      
      2:{
        y:  - 1.5,
        z: 1.6,
          transition:{
            ease: "linear",
            duration: 0.2,
            x: { duration: 1 }
          }
        
        },

        3:{
          rotateY: 0.6,
          rotateX: 0.4,
          y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 : -viewport.height - 1.4 * 4.5,
          x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
          z: 0},

          4:{
            rotateY: 0.6,
            rotateX: 0.4,
            y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
            x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
            z: 0},

          5:{
            rotateY: 0.6,
            rotateX: 0.4,
            y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
            x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
            z: 0}
      }}
        // variants={{1: {
        //     rotateY: Math.PI * 1.14,
        //     y: mobile ?  -viewport.height - 0.8 : smScreen ? -viewport.height * 1.2 : mdScreen ? -viewport.height * 1.2 : -viewport.height * 1.4,
        //     x: mobile ? 0 : Math.min(viewport.width * 0.2, 0.7),
        //     z: 1,
        // }, 
        
        // 2:{
        //   y:  - 1.5,
        //   z: 1.6,
        //     transition:{
        //       ease: "linear",
        //       duration: 0.2,
        //       x: { duration: 1 }
        //     }
          
        //   },

        //   3:{
        //     rotateY: 0.6,
        //     rotateX: 0.4,
        //     y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 : -viewport.height - 1.4 * 4.5,
        //     x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //     z: 0},

        //     4:{
        //       rotateY: 0.6,
        //       rotateX: 0.4,
        //       y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
        //       x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //       z: 0},

        //     5:{
        //       rotateY: 0.6,
        //       rotateX: 0.4,
        //       y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
        //       x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //       z: 0}
        // }}
        >
          <Model_Env/>
        </motion.group>


        {/* Avatar model */}
        {/* <group><Model_Env section={section}/></group> */}
        <motion.group position={[0 , mobile ? -1.2 : smScreen ? -1.25 : mdScreen ? -1.3 : -1.8 , 3]} scale={AvatarScalingFactorW}  
        rotation={[0,Math.PI,0]}
        animate={'' + section} 
        variants={{1: {
          rotateY: Math.PI * -0.13,
          y: mobile ?  -viewport.height *1.3 : smScreen ? -viewport.height * 1.2 : mdScreen ? -viewport.height * 1.2 : -viewport.height * 1.4,
          x: mobile ? 0 : Math.min(viewport.width * 0.2, 1.2),
          z: 1
      }, 
      
      2:{
        rotateY: Math.PI * -2,
        y: mobile ? (-viewport.height - 1.5) * 1.3 : smScreen ? -viewport.height - 1.5 *2 : mdScreen ?  -viewport.height - 1.7 * 2 : (-viewport.height - 1.4) * 1.5,
        x: mobile ? viewport.width * 0.34 : smScreen ? viewport.width * 0.33 :  Math.min(viewport.width * 0.25, 1.05),
        z: 0},

        3:{
          rotateY: -2.5,
          rotateX: 0.4,
          y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
          x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
          z: 0},
         
          4:{
            rotateY: -2.5,
            rotateX: 0.4,
            y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
            x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
            z: 0},
          
            5:{
              rotateY: -2.5,
              rotateX: 0.4,
              y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
              x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
              z: 0}
      }} 
        // variants={{1: {
        //     rotateY: Math.PI * 0.1,
        //     y: mobile ?  -viewport.height - 0.8 : smScreen ? -viewport.height * 1.2 : mdScreen ? -viewport.height * 1.2 : -viewport.height * 1.4,
        //     x: mobile ? 0 : Math.min(viewport.width * 0.2, 0.7),
        //     z: 1
        // }, 
        
        // 2:{
        //   rotateY: Math.PI * -2,
        //   y: mobile ? -viewport.height - 1.5 * 1.7 : smScreen ? -viewport.height - 1.5 *2 : mdScreen ?  -viewport.height - 1.7 * 2 : -viewport.height - 1.4 *2.5,
        //   x: mobile ? viewport.width * 0.34 : smScreen ? viewport.width * 0.33 :  Math.min(viewport.width * 0.25, 1.05),
        //   z: 0},

        //   3:{
        //     rotateY: -2.5,
        //     rotateX: 0.4,
        //     y: mobile ? -viewport.height - 1.42 * 4.5 :smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
        //     x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //     z: 0},
           
        //     4:{
        //       rotateY: -2.5,
        //       rotateX: 0.4,
        //       y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
        //       x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //       z: 0},
            
        //       5:{
        //         rotateY: -2.5,
        //         rotateX: 0.4,
        //         y: mobile ? -viewport.height - 1.42 * 4.5 : smScreen ? -viewport.height - 1.3 * 4.5 :-viewport.height - 1.4 * 4.5,
        //         x: mobile ? 0.1 : mdScreen ? viewport.width * 0.3 : Math.min(viewport.width * 0.25, 1.50),
        //         z: 0}
        // }} 
        >
        <Me_Model currentAnimation={currentAnimation}/>
        </motion.group>

       

 </Scroll>

      
        </>
  )
} {/* {scroll.offset < (1/ (scroll.pages -1) * 2) && 
        <group position={[0,0, 1]}>
        <Model section={section}/>
        </group>
        }  */}

        {/* {console.log('Testing123', 1/ (scroll.pages -1) * 1)} */}


{/* <motion.group position={[0,-1.8,3]} rotation={[0,Math.PI,0]} animate={'' + section} 
        variants={{1: {
            rotateY: Math.PI * 0.1,
            y: -viewport.height - 1.5,
            x: viewport.width * 0.2,
            z: 1
        }, 2:{
          rotateY: Math.PI * -2,
          y: -viewport.height - 1.5 *2.5,
          x: viewport.width * 0.25,
          z: 0},
          3:{
            rotateY: -2.5,
            y: -viewport.height - 1.5 * 4.4,
            x: viewport.width * 0.25,
            z: 0},
            4:{
              rotateY: -2.5,
              y: -viewport.height - 1.5 * 4.4,
              x: viewport.width * 0.25,
              z: 0},
            5:{
                rotateY: -2.5,
                y: -viewport.height - 1.5 * 4.4,
                x: viewport.width * 0.25,
                z: 0}
        }} 

          
        >
        <Model section={section}/>
        </motion.group> */}