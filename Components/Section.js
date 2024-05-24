import React from 'react'

export default function Section(props) {
    const {children} = props
  return (
    <section className='w-screen min-h-screen flex justify-center my-[50px] '>
        {children}
    </section>
  )
}
