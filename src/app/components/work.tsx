import React from "react";
import genai from "@/app/public/genai.jpg";
import nextjs from "@/app/public/nextjs.jpg";
import ts from "@/app/public/ts2.jpg";
import Image from "next/image";
import Link from "next/link";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const Work = () => {
  return (
    <div
      className={`flex flex-col justify-between items-center ${heebo.className} w-full bg-[#f4e2e2] mt-64 md:mt-20 pt-9 top-[1246px] left-[237px]`}
    >
      <h1 className="text-center font-bold text-3xl ">Featured Work</h1>
            {/*                               Typescript projects                                 */}
      <div className="flex flex-col md:flex-row items-center mt-10 w-full h-auto md:h-[272.1px] justify-center">
        {/* Image Section */}
        <div className="flex justify-center items-center  w-full md:w-auto md:mt-0 mt-4">
          <Image
            className="w-[90%] md:w-[246px] h-[180px] object-cover rounded-lg"
            src={ts}
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-[90%] md:w-[623.46px] h-auto md:h-[180px] mt-4 md:mt-0 md:ml-4">
          <Link
            className="text-xl font-semibold leading-[22.06px] w-auto md:w-[304px]"
            href="#"
          >
            Typescript Projects
          </Link>
          <p className="font-light text-lg leading-[26.44px] mt-2 md:mt-1 w-full md:w-[622px]">
            Built dynamic and interactive TypeScript applications focused on
            solving practical problems. Showcased efficient logic, clean code
            practices, and user-friendly interfaces.
          </p>
          <button
            className={`py-3 w-full md:w-[205px] md:h-[50px] bg-myButton text-white rounded-sm mt-4 md:mt-10 ${heebo.className}`}
          >
            Click Here
          </button>
        </div>
      </div>
    {/*                               Nextjs projects                                 */}
      <div className="flex flex-col md:flex-row items-center mt-10 w-full h-auto md:h-[272.1px] justify-center">

        {/* Image Section */}
        <div className="flex justify-center items-center  w-full md:w-auto md:mt-0 mt-4">
          <Image
            className="w-[90%] md:w-[246px] h-[180px] object-cover rounded-lg"
            src={nextjs}
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-[90%] md:w-[623.46px] h-auto md:h-[180px] mt-4 md:mt-0 md:ml-4">
          <Link
            className="text-xl font-semibold leading-[22.06px] w-auto md:w-[304px]"
            href="#"
          >
            Nextjs Projects
          </Link>
          <p className="font-light text-lg leading-[26.44px] mt-2 md:mt-1 w-full md:w-[622px]">
          Created responsive and pixel-perfect web applications with Next.js and Tailwind CSS. Focused on dynamic routing, optimized performance, and delivering seamless user experiences.
          </p>
          <button
            className={`py-3 w-full md:w-[205px] md:h-[50px] bg-myButton text-white rounded-sm mt-4 md:mt-10 ${heebo.className}`}
          >
            Click Here
          </button>
        </div>
      </div>
              {/*                               Generative AI projects                                 */}

      <div className="flex flex-col md:flex-row items-center mt-10 w-full h-auto md:h-[272.1px] justify-center">
        {/* Image Section */}
        <div className="flex justify-center items-center  w-full md:w-auto md:mt-0 mt-4">
          <Image
            className="w-[90%] md:w-[246px] h-[180px] object-cover rounded-lg"
            src={genai}
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-[90%] md:w-[623.46px] h-auto md:h-[180px] mt-4 md:mt-0 md:ml-4">
          <Link
            className="text-xl font-semibold leading-[22.06px] w-auto md:w-[304px]"
            href="#"
          >
            Generative AI Projects
          </Link>
          <p className="font-light text-lg leading-[26.44px] mt-2 md:mt-1 w-full md:w-[622px]">
          Built innovative AI-driven projects leveraging Python and Pytorch. Explored GANs and transformers to develop creative solutions in virtual clothing and AI-generated content.
          </p>
          <button
            className={`py-3 w-full md:w-[205px] md:h-[50px] bg-myButton text-white rounded-sm mt-4 md:mt-10 ${heebo.className}`}
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
