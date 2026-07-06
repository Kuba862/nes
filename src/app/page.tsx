import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Navigation } from "@/components/Navigation";
import { Offer } from "@/components/Offer";
import { Process } from "@/components/Process";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <Offer />
        <Works />
        <Process />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
