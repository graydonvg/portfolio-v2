import About from "@/components/about";
import FixedContactFormContainer from "@/components/contact/fixed-contact-form-container";
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
      <footer>
        <FixedContactFormContainer />
      </footer>
    </>
  );
}
