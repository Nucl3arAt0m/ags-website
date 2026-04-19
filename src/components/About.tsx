import { Shield, TrendingUp, Users, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const points = [
    { icon: <Shield className="text-primary w-6 h-6" />, title: "Trusted Agency", desc: "Proven track record of excellence." },
    { icon: <TrendingUp className="text-primary w-6 h-6" />, title: "Data Driven", desc: "Decisions backed by analytics." },
    { icon: <Users className="text-primary w-6 h-6" />, title: "Client Focused", desc: "Your success is our priority." },
    { icon: <Target className="text-primary w-6 h-6" />, title: "Result Oriented", desc: "We aim for tangible growth." },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-24 bg-pale-rose px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image Placeholder */}
        <ScrollReveal className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square bg-gradient-to-tr from-primary to-light-accent p-1 transform transition-transform hover:scale-[1.02] duration-500">
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
          {/* Subtle inner highlight */}
          <div className="w-full h-full rounded-[1.4rem] border border-white/20 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-8 text-center relative z-10">
             <div className="space-y-6">
               <h3 className="font-serif text-4xl text-white font-bold italic">"Innovation meets strategy."</h3>
               <p className="text-soft-blush font-sans">Crafting digital experiences since 2014</p>
             </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Text & Features */}
        <ScrollReveal stagger className="space-y-8">
          <div>
            <h2 className="font-serif text-5xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="font-sans text-text-gray text-lg leading-relaxed mb-4">
              At AGS, we believe in the power of connection. As a digital-first social media agency, we bridge the gap between brands and their audiences through compelling storytelling and innovative strategies.
            </p>
            <p className="font-sans text-text-gray text-lg leading-relaxed">
              Our team of creative strategists, designers, and data analysts work together to turn your vision into reality. We don't just adapt to digital trends; we create them, ensuring your brand stays ahead in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 stagger-container">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-dark text-lg">{point.title}</h4>
                  <p className="font-sans text-sm text-text-gray">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4">
             <div className="inline-block p-6 bg-white rounded-2xl shadow-md border-l-4 border-primary transform transition-transform hover:scale-105 duration-300">
                <p className="font-serif text-3xl font-bold text-primary mb-1">2.5M+</p>
                <p className="font-sans text-text-dark font-semibold uppercase tracking-wide text-xs">Leads Generated</p>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

