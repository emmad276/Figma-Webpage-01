import Image from "next/image";
import React from "react";
import jv from "@/app/public/javscript.svg";
import ts from "@/app/public/typescript.svg";
import py from "@/app/public/pythonimg.png";
import react from "@/app/public/react.svg";
import next from "@/app/public/nextjs.svg";
import node from "@/app/public/nodejs.svg";
import express from "@/app/public/express.svg";
import post from "@/app/public/postgresql.svg";
import mongo from "@/app/public/mongodb.svg";
import tailwind from "@/app/public/tailwindcss.svg";
import figma from "@/app/public/figma.svg";
import crew from "@/app/public/crewai.png";
import lang from "@/app/public/langchain.png";
import git from "@/app/public/git.svg";
import { Heebo } from "next/font/google";


const heebo = Heebo({subsets:['latin']})

const Skills = () => {
  return (
    // <div className='w-full bg-[#f4e2e2] h-[560px]  flex flex-col justify-center '>
    //     <div className='flex flex-col items-center   text-center '>
    //         <div className='w-[1280px]  py-[32px] px-0'>
    //         <h1 className="text-center font-bold text-3xl ">Skills</h1>
    //         <p>The skills, tools and technologies I am really good at:</p>
    //         </div>
    //         <div className='w-[1216px] h-[248px] justify-center text-center flex flex-wrap'>
    //         <div className='w-[1216px]  h-[100px] flex justify-center space-x-8 '>
    //                 <div className='items-center w-[88px] h-[100px] flex flex-col'>
    //                     <Image className='w-[64px] h-[64px]' src={jv} alt=''></Image>
    //                     <h1>Javascript</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col  items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={ts} alt=''></Image>
    //                     <h1>Typescript</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px] obje' src={py} alt=''></Image>
    //                     <h1>Python</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={react} alt=''></Image>
    //                     <h1>React.js</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={next} alt=''></Image>
    //                     <h1>Next.js</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={node} alt=''></Image>
    //                     <h1>Node.js</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={express} alt=''></Image>
    //                     <h1>Express.js</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={post} alt=''></Image>
    //                     <h1>PostgreSQL</h1>

    //                 </div>

    //             </div>
    //             <div className='w-[1216px] h-[100px] flex justify-center space-x-8 '>
    //                 <div className='items-center w-[88px] h-[100px] flex flex-col'>
    //                     <Image className='w-[64px] h-[64px]' src={mongo} alt=''></Image>
    //                     <h1>MongoDB</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col  items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={tailwind} alt=''></Image>
    //                     <h1>Tailwindcss</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={figma} alt=''></Image>
    //                     <h1>Figma</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={crew} alt=''></Image>
    //                     <h1>Crewai</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={lang} alt=''></Image>
    //                     <h1>LangChain</h1>

    //                 </div>
    //                 <div className='w-[88px] h-[100px] flex flex-col items-center'>
    //                     <Image className='w-[64px] h-[64px]' src={git} alt=''></Image>
    //                     <h1>Git</h1>

    //                 </div>

    //             </div>

    //         </div>
    //     </div>

    // </div>
    <div className={`${heebo.className} w-full bg-[#f4e2e2] min-h-[560px] flex flex-col justify-center`}>
      <div className="flex flex-col items-center text-center">
        <div className="max-w-screen-lg py-8 px-4">
          <h1 className="text-center font-bold text-3xl mb-2">Skills</h1>
          <p className="text-center text-sm sm:text-base">
            The skills, tools, and technologies I am really good at:
          </p>
        </div>
        <div className="w-full max-w-screen-lg flex flex-wrap justify-center gap-4">
          {/* Skills Grid */}
          {[
            { src: jv, name: "JavaScript" },
            { src: ts, name: "TypeScript" },
            { src: py, name: "Python" },
            { src: react, name: "React.js" },
            { src: next, name: "Next.js" },
            { src: node, name: "Node.js" },
            { src: express, name: "Express.js" },
            { src: post, name: "PostgreSQL" },
            { src: mongo, name: "MongoDB" },
            { src: tailwind, name: "Tailwind CSS" },
            { src: figma, name: "Figma" },
            { src: crew, name: "Crewai" },
            { src: lang, name: "LangChain" },
            { src: git, name: "Git" },
          ].map((skill, index) => (
            <div
              key={index}
              className="w-[88px] h-[120px] flex flex-col items-center"
            >
              <Image
                className="w-[64px] h-[64px]"
                src={skill.src}
                alt={skill.name}
              />
              <h1 className="text-sm mt-2">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
