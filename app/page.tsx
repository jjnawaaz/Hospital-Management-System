import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </>
  );
}
