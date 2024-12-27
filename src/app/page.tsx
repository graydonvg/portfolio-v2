import About from "@/components/about";
import FixedFooter from "@/components/fixed-footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies/technologies";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
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
