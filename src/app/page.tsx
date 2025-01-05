import About from "@/components/about/about";
import FixedContactFormContainer from "@/components/contact/fixed-contact-form-container";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NavDrawer from "@/components/nav/nav-drawer";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies/technologies";
import Toast from "@/components/ui/toast";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10 border-b border-border bg-background">
        <Hero />
        <About />
        <Projects />
        <Technologies />
      </main>
      <footer>
        <FixedContactFormContainer />
      </footer>
      <NavDrawer />
      <Toast />
    </>
  );
}
