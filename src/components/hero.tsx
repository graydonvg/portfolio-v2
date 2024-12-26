"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import TypographyH1 from "./ui/typography/h1";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-clip bg-[linear-gradient(to_bottom,black,#071E18_35%,#208A65_67%,#35Fb8E_85%)]">
      <div className="absolute left-1/2 top-[42.5%] min-h-screen w-[200vw] min-w-[2000px] -translate-x-1/2 rounded-[50%] border-[1px] border-[#8CD6DE]/30 bg-black bg-[radial-gradient(closest-side,black_85%,#249974)]" />

      <div className="absolute left-0 top-0 size-full">
        <div className="z-10 flex size-full flex-col items-center justify-center gap-8 text-center sm:gap-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[clamp(1.125rem,0.9946rem+0.6522vw,1.5rem)]">
              Hello, I&apos;m Graydon!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[50%] bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl" />
            <Image
              src="/images/headshots/headshot-1.jpg"
              alt="headshot"
              quality={100}
              priority
              width={250}
              height={250}
              className="relative z-10 aspect-square rounded-[50%] object-cover object-[50%_0%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-14"
          >
            <TypographyH1>
              Front-end <span className="hidden sm:inline">web</span> developer
              <br />
              specializing in
              <br className="sm:hidden" />{" "}
              <span className="text-emerald-400">ReactJS</span>
            </TypographyH1>

            <Button>View my resume</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
