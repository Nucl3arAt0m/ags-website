import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex text-center flex-col justify-center items-center bg-gradient-to-b from-primary to-primary-dark overflow-hidden px-6 pt-20">
      {/* Noise Overlay */}
      <div className="bg-noise z-0"></div>
      
      {/* Background Animated Gradient / Shimmer effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-light-accent/30 rounded-full blur-[100px] animate-[pulse_4s_easeInOut_infinite]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-primary-mid/40 rounded-full blur-[80px] animate-[pulse_6s_easeInOut_infinite] delay-1000"></div>
      </div>

      <ScrollReveal stagger className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12 mb-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          We Don't Just Manage Social Media. <br className="hidden md:block"/> We Build Brands.
        </h1>
        <p className="font-sans text-lg md:text-xl text-soft-blush font-light max-w-2xl mb-10">
          Elevate your digital presence with data-driven strategies and creative excellence. 
          We are the marketing partners you've been looking for.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-pale-rose shadow-lg hover:-translate-y-1 transform">
            Get Started
          </a>
          <a href="#services" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:-translate-y-1 transform">
            Our Services
          </a>
        </div>
      </ScrollReveal>

      {/* Floating Stat Cards */}
      <ScrollReveal stagger className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-16 w-full">
        {[
          { label: "Clients Empowered", value: "500+" },
          { label: "Years Experience", value: "10+" },
          { label: "Client Retention", value: "98%" }
        ].map((stat, i) => (
          <div 
            key={i} 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="font-serif text-4xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="font-sans text-soft-blush font-medium uppercase tracking-wider text-sm">{stat.label}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}

