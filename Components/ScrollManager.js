import React, { useEffect } from 'react'
import { useScroll} from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {gsap} from 'gsap'

export default function ScrollManager(props) {
    const {section,onSectionChange} = props
    const data = useScroll()
    const lastScroll = useRef(0)
    const isAnimating = useRef(false)

    data.fill.classList.add("top-0")
    data.fill.classList.add('absolute')

    useEffect(() =>{
        gsap.to(data.el, {
            duration: 1,
            scrollTop: (section === 0 ? section: section +0.04) * data.el.clientHeight ,
            onStart: () => {
                isAnimating.current = true
            },
            onComplete: () =>{
                isAnimating.current = false
            }
        })
    }, [section])



    useFrame(() => {
        if (isAnimating.current){
            lastScroll.current = data.scroll.current;
            return;
        }

        // console.log(data.el.clientHeight)
        // console.log('test', data)
   
        const currentSection = Math.floor(data.scroll.current * data.pages)
        if(data.scroll.current > lastScroll.current && currentSection === 0){
            onSectionChange(1)
        }

        // console.log('test', section * data.el.clientHeight)

        if(data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1) ){
            onSectionChange(0)
        }
        
        // console.log('testin123', data.offset)
        lastScroll.current = data.scroll.current

    })

  return null
}
