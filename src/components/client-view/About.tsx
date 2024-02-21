"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "@/assets/about-image.png";
import { AboutDocument } from "@/types/DocumentDataTypes";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

interface Props {
  data: AboutDocument;
}

export default function ClientAboutView({ data }: Props) {
  console.log(data, "aboutdata");

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="w-full flex">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-primary-500 bg-ehite-500 z-10"
        >
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${
                  index === 0
                    ? "sm:justify-start"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={variants()}
            >
              <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-[#ffffff]  font-bold">
                    {infoItem.value}+
                  </p>
                  <p className="text-[25px] font-bold text-primary-500">
                    {infoItem.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium text-primary-500">
          {headingText}
        </h1>
        <p className="text-[#fff] mt-4 mb-8 font-bold">{data?.aboutme}</p>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          className="flex w-full"
        >
          <motion.div variants={variants()} className="h-full w-full p-4">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              quality={100}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          className={"flex items-center w-full p-4"}
        >
          <motion.div
            variants={variants()}
            className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
          >
            {data?.skills.split(", ").map((skill: string, index: number) => (
              <motion.div
                key={index}
                className="w-full flex justify-center items-center"
              >
                <div className="py-3 w-[160px] px-6 border-[2px] border-black bg-gradient-to-r from-primary-500 to-secondary-500 text-[#fff] text-center rounded-lg tracking-widest transition-all outline-none">
                  {skill}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
