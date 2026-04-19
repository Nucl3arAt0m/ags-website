import ServicesCarousel from "./ServicesCarousel";
import ScrollReveal from "./ScrollReveal";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-24 bg-white px-6 overflow-hidden">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-5xl font-bold text-primary mb-4">What We Offer</h2>
        <p className="font-sans text-text-gray text-lg">
          Tailored digital solutions to elevate your brand and drive measurable results.
        </p>
      </ScrollReveal>
      <ServicesCarousel />
    </section>
  );
}
