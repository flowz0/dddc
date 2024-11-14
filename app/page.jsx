import BeforeAfter from "./_components/BeforeAfter";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
// import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import SpecialOffers from "./_components/SpecialOffers";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <SpecialOffers />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </>
  );
}
