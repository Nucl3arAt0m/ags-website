import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <Contact />
      <Footer />
    </main>
  );
}
