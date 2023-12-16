import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import usbair from "@/public/usbair.png";
import b2b from "@/public/firsttripb2b.png";
import b2c from "@/public/firsttripb2c.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "TechnoNext Ltd, Dhaka",
    description:
      "Demonstrated ability to deliver a robust and efficient user interface for OTA management.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "USBAIR.COM",
    description:
      "I have little contribution like. Implemented some page design & components using Tailwind CSS in Next Js from Figma.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: usbair,
  },
  {
    title: "FirstTrip B2B",
    description: `Developed and implemented Online Travel Agency (OTA) Management System 
      frontend using Next.js, Zustand, RT* Query, Next Auth, Tailwind CSS & Chakra UI`,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: b2b,
  },
  {
    title: "FirstTrip B2C",
    description: ` have contributed by implementing page designs and components using Tailwind 
      CSS in Next.js, translating Figma designs into functional elements. 
      
      
      I bring a comprehensive skill set to deliver a robust and efficient user interface for 
      OTA management, showcasing expertise in cutting edge web development 
      technologies`,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: b2c,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
