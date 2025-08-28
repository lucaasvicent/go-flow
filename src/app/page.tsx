
import About from "./components/sections/about/About";
import FAQ from "./components/sections/faq/Faq";
import Hero from "./components/sections/hero/Hero";
import Solutions from "./components/sections/solutions/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <FAQ />
    </>
  );
}
