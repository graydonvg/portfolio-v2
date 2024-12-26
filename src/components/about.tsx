import Image from "next/image";
import project from "../../public/images/mockups/mystore-mockup.jpg";
import TypographyH2 from "./ui/typography/h2";
import TypographyP from "./ui/typography/p";
import TypographyH3 from "./ui/typography/h3";

export default function About() {
  return (
    <section id="about" className="p-4 sm:p-8">
      <TypographyH2>
        About <span className="text-emerald-400">Me</span>
      </TypographyH2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        <div className="rounded-lg border border-border p-6">
          <TypographyH3>01. Background</TypographyH3>
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
            {/* I thrive on the creative problem-solving that coding
            offers, and I&apos;m always excited to tackle new challenges. */}
          </TypographyP>
          {/* <p>
            My goal is to master front-end development and grow into full-stack
            development.
          </p> */}
        </div>

        <div className="h-full rounded-lg border border-border p-6">
          <TypographyH3>02. Expertise</TypographyH3>
          <TypographyP>
            I am experienced in HTML, CSS, JavaScript, TypeScript, React.js,
            Next.js, and more.
          </TypographyP>
          <TypographyP>
            I specialize in creating responsive, accessible, and visually
            appealing web applications that deliver exceptional user
            experiences.
          </TypographyP>

          <div className="relative mt-4 h-fit overflow-hidden rounded-lg sm:mt-6">
            <Image
              src={project}
              alt="headshot"
              priority
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="h-full rounded-lg border border-border p-6">
          <TypographyH3>03. Goals</TypographyH3>
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
            />
          </div>
        </div>
        {/* <div className="h-full rounded-lg border border-border p-6">
          <TypographyH3>03. Skills</TypographyH3>
          <p>
            I am proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </p>
        </div> */}
      </div>
    </section>
  );
}
