import React from 'react'
import { Inter } from "next/font/google"

import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

const Navbar = () => {
let navItems = [
    {
        name:"Works",
        link:"3",
    },
    {
        name:"Skills",
        link:"#",
    },
    {
        name:"Contact",
        link:"#",
    }
]

  return (
    <div>
        <ul className={`${inter.className} font-medium  text-xl flex  items-center justify-end  gap-7 h-[24px] m-[66px]  text-black`}>
            {
                navItems.map((item, i)=>(
                    
                    <li key={i}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
            {/* <li className='w-[61px] h-[24px] top-[66px] left-[1088px]  leading-[24.2px]'>Works</li>
            <li className='w-[43px] h-[24px] top-[66px] left-[1201px] leading-[24.2px]'>Blog</li>
            <li className='w-[77px] h-[24px] top-[66px] left-[1294px] leading-[24.2px]'>Contact</li> */}
        </ul>
    </div>
  )
}

export default Navbar