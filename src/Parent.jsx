import React from 'react'

function Parent() {
  return (
    <div className=' h-75 bg-black grid grid-cols-4 gap-2 p-4'>
        <section className=' bg-lime-200'></section>
        <section className=' bg-[#0005] bg-blend-darken text-sky-200 bg-[url(html-clock.jpg)] bg-contain bg-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet.
        </section>
        <section className=' bg-lime-200'></section>
        <section className=' bg-lime-200'></section>
    </div>
  )
}

export default Parent