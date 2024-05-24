/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Jonathons_model4_3.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import {motion } from "framer-motion-3d"

export function Model(props) {
  const {section} = props;
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Jonathons_model4_3.glb')
  const { actions } = useAnimations(animations, group)
  // const randomAnimation = actions['rigAction']?.play()
  const scroll = useScroll()
  const tl = useRef()


  
  useFrame(() =>{
    // console.log('Test', group.current.position)
    // tl.current.seek(scroll.offset-(scroll.offset * -1/5))
  })

  // useEffect(()=>{
  //   tl.current = gsap.timeline()

  //   tl.current.to(
  //     group.current.position,
  //     {
  //       duration: 4,
  //       y: 0
  //     },
  //     0
  //   )

  //   tl.current.to(
  //     group.current.position,
  //     {
  //       rotationX:3
  //     }
  //   )
  // }, [])

  useEffect(()=>{
    // actions['']?.play()
    // randomAnimation
    
  }, [])

  return (
    <motion.group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig" position={[0, 0, 0]}>
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials.Skin} skeleton={nodes.Body.skeleton} />
          <skinnedMesh name="Bottom_teeth" geometry={nodes.Bottom_teeth.geometry} material={materials.Teeth} skeleton={nodes.Bottom_teeth.skeleton} />
          <skinnedMesh name="Cornrow1" geometry={nodes.Cornrow1.geometry} material={materials.Hair} skeleton={nodes.Cornrow1.skeleton} />
          <skinnedMesh name="Cornrow2" geometry={nodes.Cornrow2.geometry} material={materials.Hair} skeleton={nodes.Cornrow2.skeleton} />
          <skinnedMesh name="Cornrow3" geometry={nodes.Cornrow3.geometry} material={materials.Hair} skeleton={nodes.Cornrow3.skeleton} />
          <skinnedMesh name="Ears" geometry={nodes.Ears.geometry} material={materials.Skin} skeleton={nodes.Ears.skeleton} />
          <skinnedMesh name="Eye" geometry={nodes.Eye.geometry} material={materials.Eyes} skeleton={nodes.Eye.skeleton} />
          <skinnedMesh name="Eye_brow" geometry={nodes.Eye_brow.geometry} material={materials.Hair} skeleton={nodes.Eye_brow.skeleton} />
          <skinnedMesh name="Hairbase" geometry={nodes.Hairbase.geometry} material={materials.Scalp} skeleton={nodes.Hairbase.skeleton} />
          <skinnedMesh name="Head" geometry={nodes.Head.geometry} material={materials.Skin} skeleton={nodes.Head.skeleton} />
          <skinnedMesh name="Nose" geometry={nodes.Nose.geometry} material={materials.Skin} skeleton={nodes.Nose.skeleton} />
          <skinnedMesh name="Panatalones" geometry={nodes.Panatalones.geometry} material={materials.Pants} skeleton={nodes.Panatalones.skeleton} />
          <skinnedMesh name="Pants_legs" geometry={nodes.Pants_legs.geometry} material={materials.Pants} skeleton={nodes.Pants_legs.skeleton} />
          <skinnedMesh name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Teeth} skeleton={nodes.Shoes.skeleton} />
          <skinnedMesh name="Sweater" geometry={nodes.Sweater.geometry} material={materials.Sweater} skeleton={nodes.Sweater.skeleton} />
          <skinnedMesh name="Top_Teeth" geometry={nodes.Top_Teeth.geometry} material={materials.Teeth} skeleton={nodes.Top_Teeth.skeleton} />
        </group>
      </group>
    </motion.group>
  )
}

useGLTF.preload('/Jonathons_model4_3.glb')
