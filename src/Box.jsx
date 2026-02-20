import React from 'react'

function Box({text1, myIcon}) {
  return (
    <div className=' h-[80%] bg-white w-[30%] flex flex-col items-center justify-center gap-4 p-4 border-b-8 border-b-blue-400'>
      <section className=' h-17.5 bg-blue-500 w-17.5 rounded-full grid place-items-center'>
        {myIcon}
      </section>
      <h1 className=' text-2xl font-semibold'>{text1}</h1>
      <p className=' text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam earum molestias eos, nihil repellat delectus dignissimos quasi dolorem error placeat.</p>
    </div>
  )
}

export default Box