import React from 'react'
import { CheckBox1, CheckBox3, CheckBox4, CheckBox5, CheckBox6, CheckBox7, CheckBox8, CheckBox9 } from './CheckBox'

const Pages = () => {
  return (
    <div className="border-dashed rounded-md border-2 border-[#9747FF]">
        <div className=' m-[10px] space-y-[20px] ' >
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
          <Page8/>

        </div>
        </div>
  )
}

export default Pages

  const Page1=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox9/>
    </div>
  )
}

const Page2=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox8/>
    </div>
  )
}

const Page3=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox3/>
    </div>
  )
}

const Page4=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox4/>
    </div>
  )
}

const Page5=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox5/>
    </div>
  )
}

const Page6=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox6/>
    </div>
  )
}

const Page7=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox7 />
    </div>
  )
}

const Page8=()=>{
  return(
    <div className='w-[370px] bg-white flex flex-row justify-between px-[22px] py-3 ' >
      <div>All Pages</div>
      <CheckBox9/>
    </div>
  )
}