import React from 'react'
import Boy from './Boy'
// props - short for properties. 
// It is used to pass data from a parent component to a child component. 
// Props make your components reuseable.

function PropsClass() {
  return (
    <div>
        <h1 className=' text-4xl'>Props class component</h1>
        <Boy name="John"/>
        <Boy name="Obi"/>
        <Boy name="Ada"/>
    </div>
  )
}

export default PropsClass