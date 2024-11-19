import { Heebo } from "next/font/google";
import React from "react";
const heebo = Heebo({ subsets: ["latin"] });

const Whatido = () => {
  return (
    // <div className='w-full h-[876px]  flex px-[160px] py-[150px] justify-center items-center gap-x-6'>
    //     <div className='w-[529px] h-[338px] flex flex-col justify-center'>
    //         <div className=''>
    //             <h1 className='w-[254px] h-[56px]  font-bold text-4xl '>What I do?</h1>
    //             <p className='w-[529px] h-[110px]'>I create innovative digital solutions by blending front-end design, backend logic, and advanced technologies like Generative AI and TypeScript. Let's transform ideas into impactful projects.</p>
    //         </div>
    //         <div className='text-white flex flex-col items-center justify-center text-center w-[126px] h-[28px] py-[24px] px-[12px] bg-myButton rounded'>
    //             <button>Say Hello!</button>
    //         </div>
    //     </div>
    //     <div className='w-[648px] '>
    //         <div className='w-[648px] h-[155px] py-[29px] px-[32px] mt-5 bg-white'>
    //             <h4 className='font-bold text-2xl'>Web Development</h4>
    //             <p className='leading-[24px] pt-3'>Building responsive, pixel-perfect web applications using modern frameworks like Next.js and Tailwind CSS.</p>
    //         </div>
    //         <div className='w-[648px] h-[155px] py-[29px] px-[32px] mt-5 bg-white'>
    //             <h4 className='font-bold text-2xl'>Backend Development</h4>
    //             <p className='leading-[24px] pt-3'>Developing secure and scalable APIs using Node.js and Express with seamless database integration.</p>
    //         </div>
    //         <div className='w-[648px] h-[155px] py-[29px] px-[32px] mt-5 bg-white'>
    //             <h4 className='font-bold text-2xl'>Generative AI Solutions</h4>
    //             <p className='leading-[24px] pt-3'>Creating innovative AI-driven applications to solve real-world problems using Python and AI frameworks</p>
    //         </div>
    //         <div className='w-[648px] h-[155px] py-[29px] px-[32px] mt-5 bg-white'>
    //             <h4 className='font-bold text-2xl'>TypeScript Expertise</h4>
    //             <p className='leading-[24px] pt-3'>Building interactive and dynamic applications with a strong foundation in TypeScript for clean and maintainable code.</p>
    //         </div>

    //     </div>
    // </div>

    <div className={`${heebo.className} w-full h-auto flex flex-col lg:flex-row px-4 lg:px-[160px] py-8 lg:py-[150px] justify-center items-center gap-y-8 lg:gap-y-0 lg:gap-x-6`}>
      <div className="w-full lg:w-[529px] h-auto flex flex-col justify-center items-center lg:items-start">
        <div className="text-center lg:text-left">
          <h1 className="w-full lg:w-[254px] h-auto font-bold text-3xl md:text-3xl lg:text-4xl">
            What I do?
          </h1>
          <p className="w-full lg:w-[529px] h-auto mt-4">
            I create innovative digital solutions by blending front-end design,
            backend logic, and advanced technologies like Generative AI and
            TypeScript. Let&apos;s transform ideas into impactful projects.
          </p>
        </div>
        <div className="mt-6">
          <button className="text-white flex items-center justify-center text-center w-auto h-auto py-3 px-6 bg-myButton rounded">
            Say Hello!
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[648px] flex flex-col gap-y-5">
        <div className="w-full h-auto py-6 px-4 lg:px-[32px] bg-white">
          <h4 className="font-bold text-xl md:text-2xl">Web Development</h4>
          <p className="leading-[24px] pt-3">
            Building responsive, pixel-perfect web applications using modern
            frameworks like Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="w-full h-auto py-6 px-4 lg:px-[32px] bg-white">
          <h4 className="font-bold text-xl md:text-2xl">Backend Development</h4>
          <p className="leading-[24px] pt-3">
            Developing secure and scalable APIs using Node.js and Express with
            seamless database integration.
          </p>
        </div>
        <div className="w-full h-auto py-6 px-4 lg:px-[32px] bg-white">
          <h4 className="font-bold text-xl md:text-2xl">
            Generative AI Solutions
          </h4>
          <p className="leading-[24px] pt-3">
            Creating innovative AI-driven applications to solve real-world
            problems using Python and AI frameworks.
          </p>
        </div>
        <div className="w-full h-auto py-6 px-4 lg:px-[32px] bg-white">
          <h4 className="font-bold text-xl md:text-2xl">
            TypeScript Expertise
          </h4>
          <p className="leading-[24px] pt-3">
            Building interactive and dynamic applications with a strong
            foundation in TypeScript for clean and maintainable code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whatido;
