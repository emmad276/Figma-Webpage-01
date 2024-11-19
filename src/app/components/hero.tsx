import { Heebo } from 'next/font/google'
import React from 'react'
const heebo = Heebo({subsets:['latin']})
import Image from 'next/image'
import Emmadimagebgr from "@/app/public/Emmadimagebgr.png"


const Hero = () => {
  return (
    <div className=' justify-between h-auto  md:w-[1030px]  top-[308px]  items-center flex flex-col-reverse md:flex-row  mx-auto left-[231px]
    p-6'>
        <div className=' flex items-start flex-col justify-between w-[95%] md:w-[521px]  h-[305px] top-[249px] left-[231px] text-[#21243D]'>
            <h1 className={`mt-8  ${heebo.className}  top-[249px] left-[231px] font-extrabold text-[48px] leading-[61px]  tracking-[2px]`}>Hi, I am Emmad,<br/>Web Developer </h1>
            
            <p className={`mt-3 ${heebo.className} top-[402px] left-[231px] w-[95%] md:w-[497px] h-[66px]  font-normal text-[16px] leading-[23.5px] mb-9`}>I specialize in crafting modern, user-friendly websites that blend design with functionality. With a passion for coding and problem-solving, I strive to deliver seamless digital experiences. Let’s create something extraordinary together!</p>
            <button className={` py-3  px-20 md:px-0 ${heebo.className}  text-white md:w-[205px] md:h-[50px]  bg-myButton rounded-sm top-[504px] left-[231px] mt-20 md:mt-10 `}>Download Resume</button>
        </div>
        <div className='w-[298px] h-[308px] top-[246px] left-[963px]  '>
            <Image className='w-[280px] h-[308px] top-[246px] left-[969px] rounded-full'  src={Emmadimagebgr} alt=''></Image>
        </div>
    </div>
  )
}

export default Hero