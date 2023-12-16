"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a very passionate front-end developer. I like exploring different
        web technology-related frameworks. I like to solve problems and fix
        errors. I am always eager to take on a new challenge to bring great
        ideas to life and learn new technologies and develop solutions based on
        them. Quickly learns and masters new technologies. Always up for
        conversation related to tech!
      </p>
    </motion.section>
  );
}
