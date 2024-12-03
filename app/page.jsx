import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SpecialOffers from "./components/SpecialOffers";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <SpecialOffers />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
