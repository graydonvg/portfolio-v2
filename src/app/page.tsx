import About from "@/components/about";
import FixedFooter from "@/components/fixed-footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <>
      <main className="relative z-10 border-b border-border bg-background">
        <Hero />
        <About />
        <Projects />
        <Technologies />
      </main>
      <FixedFooter />
    </>
  );
}
