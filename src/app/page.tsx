
import About from "./components/sections/about/About";
import FAQ from "./components/sections/faq/FAQ";
import Hero from "./components/sections/hero/hero";
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
