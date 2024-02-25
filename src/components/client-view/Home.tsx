"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HomeDocument } from "@/types/DocumentDataTypes";
import { scroller } from "react-scroll";
import profileImg from "@/assets/profile.jpg";
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  data: HomeDocument;
}

const ClientHomeView = ({ data }: Props) => {
  console.log(data, "ClientHomeView");

  const socialIcons = [
    {
      id: "twitter",
      icon: (
        <Link href={data.twitter as Url} target="_blank">
          <FaTwitter className="w-[40px] h-[40px]" />
        </Link>
      ),
    },
    {
      id: "linkedin",
      icon: (
        <Link href={data.linkedin as Url} target="_blank">
          <FaLinkedinIn className="w-[40px] h-[40px] " />
        </Link>
      ),
    },
    {
      id: "github",
      icon: (
        <Link href={data.github as Url} target="_blank">
          <FaGithub className="w-[40px] h-[40px] " />
        </Link>
      ),
    },
  ];

  const headingList = data.heading.split(", ");
  const generateSequence = () => {
    const sequence: (string | number)[] = [];
    headingList.forEach((heading: string, index: number) => {
      sequence.push(heading);
      if (index !== headingList.length - 1) {
        sequence.push(1000); // Delay between headings
      }
    });
    return sequence;
  };

  return (
    <div id="home">
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={generateSequence()}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              {data.summary}
            </p>
            <motion.div className="flex gap-3 cursor-pointer justify-center md:justify-start p-4">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
            <div>
              <button
                onClick={() =>
                  scroller.scrollTo("contact", {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                  })
                }
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </button>
              <Link
                href={data.resume}
                target="_blank"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={data.profilePic}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={375}
                height={375}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientHomeView;
