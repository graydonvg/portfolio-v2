"use client";

import Image from "next/image";
import project from "../../public/images/mockups/mystore-mockup.jpg";
import TypographyH2 from "./ui/typography/h2";
import TypographyP from "./ui/typography/p";
import TypographyH3 from "./ui/typography/h3";
import Section from "./ui/section";

export default function About() {
  return (
    <Section id="about">
      <TypographyH2>
        About <span className="text-accent">Me</span>
      </TypographyH2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
          <TypographyH3>
            <span className="text-accent">01.</span> Background
          </TypographyH3>
          <TypographyP>
            I started my career in hospitality as a restaurant manager, but I
            soon craved more intellectual challenges.
          </TypographyP>
          <TypographyP>
            My love for problem-solving, sparked by high school calculus, led me
            to explore applied mathematics and programming languages such as
            C++, MATLAB, and R.
          </TypographyP>
          <TypographyP>
            Curiosity then brought me to web development, where I began with
            HTML, CSS, and JavaScript, eventually falling in love with React and
            Next.js.
          </TypographyP>
          <TypographyP>
            I thrive on the creative problem-solving that coding offers, and
            I&apos;m always excited to tackle new challenges.
          </TypographyP>
        </div>

        <div className="h-full rounded-lg border border-border bg-card p-6 text-card-foreground">
          <TypographyH3>
            <span className="text-accent">02.</span> Expertise
          </TypographyH3>
          <TypographyP>
            I am experienced in HTML, CSS, JavaScript, TypeScript, React.js,
            Next.js, and more.
          </TypographyP>
          <TypographyP>
            I specialize in creating responsive, accessible, and performant web
            applications that are visually appealing and deliver exceptional
            user experiences.
          </TypographyP>

          <div className="relative mt-4 h-fit overflow-hidden rounded-lg sm:mt-6">
            <Image
              src={project}
              alt="headshot"
              priority
              className="rounded-lg"
              sizes="(min-width: 1540px) 420px, (min-width: 1280px) 334px, (min-width: 1040px) 249px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
            />
          </div>
        </div>

        <div className="h-full rounded-lg border border-border bg-card p-6 text-card-foreground">
          <TypographyH3>
            <span className="text-accent">03.</span> Goals
          </TypographyH3>
          <TypographyP>
            My goal is to contribute to innovative teams where I can grow my
            skills in both front-end and back-end development, and help create
            impactful web solutions.
          </TypographyP>

          <div className="relative mt-4 h-fit overflow-hidden rounded-lg sm:mt-6">
            <Image
              src={project}
              alt="headshot"
              priority
              className="rounded-lg"
              sizes="(min-width: 1540px) 420px, (min-width: 1280px) 334px, (min-width: 1040px) 249px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
