import { Heebo } from 'next/font/google'
import React from 'react'
const  heebo = Heebo({subsets:['latin']})
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-footerBackground space-y-6  h-[243px] justify-center flex flex-col items-center'>
        <div className='flex space-x-5'>
            <Link href={""}>
            <FaFacebook className='w-[30px] h-[30px]'/>
            </Link>
            <Link href={""}>
                <FaInstagram className='w-[30px] h-[30px]'/>
            </Link>
            <Link href={""}>
                <FaTwitter className='w-[30px] h-[30px]'/>
            </Link>
            <Link href={""}>
                <FaLinkedin className='w-[30px] h-[30px]'/>
            </Link>
            
        
        
        

        </div>
        <p className={`w-[350px] md:w-[352px] h-[32px] top-[2354.67px] left-[543px] ${heebo.className} text-center font-medium text-[22px] leading-[32.31px]`}>Copyright ©2020 All rights reserved</p>

    </div>
  )
}

export default Footer