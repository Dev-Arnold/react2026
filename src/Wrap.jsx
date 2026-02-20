import React from 'react'
import Box from './Box'
import { LuSquareStack } from "react-icons/lu";
import { FaBezierCurve } from "react-icons/fa6";


function Wrap() {
  return (
    <div className=' h-85 bg-black flex justify-evenly items-center'>
      <Box text1="Visualize it" myIcon={<LuSquareStack className=' text-3xl text-white'/>}/>
      <Box text1="Create it" myIcon={<FaBezierCurve className=' text-3xl text-white'/>}/>
      <Box text1="Grow it"/>

    </div>
  )
}

export default Wrap