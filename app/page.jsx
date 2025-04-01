import MobileCTAs from "./components/MobileCTAs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import SpecialOffers from "./components/SpecialOffers";
import FAQ from "./components/FAQ";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <MobileCTAs />
      <Hero />
      <Services />
      <BeforeAfter />
      <SpecialOffers />
      <FAQ />
      <BookingCTA />
      <Footer />
    </>
  );
}
