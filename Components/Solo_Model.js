/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Solo_Jonathon_with_laptop2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {motion } from "framer-motion-3d"
import { useThree } from '@react-three/fiber'


export function Solo_Model(props) {
  const {currentAnimation, section} = props
  const viewport = useThree()
  const group = useRef()
  const PersonModel = useRef()
  const ComputerEnv = useRef()
  const { nodes, materials, animations } = useGLTF('/Solo_Jonathon_with_laptop2.glb')
  const { actions } = useAnimations(animations, PersonModel)

  useFrame(() =>{
    actions['Typing'].play()
    
    
  })

  return (
      <motion.group name="Scene" dispose={null}   ref={PersonModel} >
        <group name="rig"  >
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
          <skinnedMesh frustumCulled={false} name="Body" geometry={nodes.Body.geometry} material={materials.Skin} skeleton={nodes.Body.skeleton} />
          <skinnedMesh frustumCulled={false} name="Bottom_teeth" geometry={nodes.Bottom_teeth.geometry} material={materials.Teeth} skeleton={nodes.Bottom_teeth.skeleton} />
          <skinnedMesh frustumCulled={false} name="Cornrow1" geometry={nodes.Cornrow1.geometry} material={materials.Hair} skeleton={nodes.Cornrow1.skeleton} />
          <skinnedMesh frustumCulled={false} name="Cornrow2" geometry={nodes.Cornrow2.geometry} material={materials.Hair} skeleton={nodes.Cornrow2.skeleton} />
          <skinnedMesh frustumCulled={false} name="Cornrow3" geometry={nodes.Cornrow3.geometry} material={materials.Hair} skeleton={nodes.Cornrow3.skeleton} />
          <skinnedMesh frustumCulled={false} name="Ears" geometry={nodes.Ears.geometry} material={materials.Skin} skeleton={nodes.Ears.skeleton} />
          <skinnedMesh frustumCulled={false} name="Eye" geometry={nodes.Eye.geometry} material={materials.Eyes} skeleton={nodes.Eye.skeleton} />
          <skinnedMesh frustumCulled={false} name="Eye_brow" geometry={nodes.Eye_brow.geometry} material={materials.Hair} skeleton={nodes.Eye_brow.skeleton} />
          <skinnedMesh frustumCulled={false} name="Hairbase" geometry={nodes.Hairbase.geometry} material={materials.Scalp} skeleton={nodes.Hairbase.skeleton} />
          <skinnedMesh frustumCulled={false} name="Head" geometry={nodes.Head.geometry} material={materials.Skin} skeleton={nodes.Head.skeleton} />
          <skinnedMesh frustumCulled={false} name="Nose" geometry={nodes.Nose.geometry} material={materials.Skin} skeleton={nodes.Nose.skeleton} />
          <skinnedMesh frustumCulled={false} name="Panatalones" geometry={nodes.Panatalones.geometry} material={materials.Pants} skeleton={nodes.Panatalones.skeleton} />
          <skinnedMesh frustumCulled={false} name="Pants_legs" geometry={nodes.Pants_legs.geometry} material={materials.Pants} skeleton={nodes.Pants_legs.skeleton} />
          <skinnedMesh frustumCulled={false} name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Teeth} skeleton={nodes.Shoes.skeleton} />
          <skinnedMesh frustumCulled={false} name="Sweater" geometry={nodes.Sweater.geometry} material={materials.Sweater} skeleton={nodes.Sweater.skeleton} />
          <skinnedMesh frustumCulled={false} name="Top_Teeth" geometry={nodes.Top_Teeth.geometry} material={materials.Teeth} skeleton={nodes.Top_Teeth.skeleton} />
        </group>
      </motion.group>
  )
}

useGLTF.preload('/Solo_Jonathon_with_laptop2.glb')
