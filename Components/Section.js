import React from 'react'

export default function Section(props) {
    const {children} = props
  return (
    <section className='w-screen  min-h-screen relative flex justify-center mt-3 px-10 py-4'>
        {children}
    </section>
  )
}
