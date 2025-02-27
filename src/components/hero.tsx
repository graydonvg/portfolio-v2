"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import TypographyH1 from "./ui/typography/h1";
import headshot from "../../public/images/headshots/headshot.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,black,#071E18_35%,#208A65_67%,black_85%)]"
    >
      <div className="absolute left-1/2 top-[50%] h-screen min-h-[400px] w-[200vw] min-w-[2400px] -translate-x-1/2 rounded-[50%] border-[1px] border-[#8CD6DE]/30 bg-[radial-gradient(closest-side,black_85%,#249974)]" />

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center md:py-24">
        <div className="flex w-full flex-col items-center gap-8 text-center sm:gap-14 lg:gap-[clamp(1rem,5.6vh,3.5rem)]">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.125rem,0.9946rem+0.6522vw,1.5rem)]"
          >
            Hello, I&apos;m Graydon!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl" />

            <div className="relative aspect-square h-[250px] overflow-hidden rounded-[50%] sm:h-[350px] md:h-[25vh] md:max-h-[250px]">
              <Image
                src={headshot}
                alt="headshot image"
                quality={100}
                placeholder="blur"
                priority
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypographyH1>
              Front-end <span className="hidden sm:inline">web</span> developer
              <br />
              specializing in
              <br className="sm:hidden" />{" "}
              <span className="text-accent">ReactJS.</span>
            </TypographyH1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a
              tabIndex={-1}
              href="/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button>View my resume</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
