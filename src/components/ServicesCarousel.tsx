"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  MessageCircleHeart, 
  Palette, 
  Megaphone, 
  Lightbulb, 
  Star, 
  ChartBarBig,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: "Social Media Management",
    desc: "End-to-end management of your social channels to build community and drive engagement.",
    icon: <MessageCircleHeart className="w-8 h-8 text-primary" />
  },
  {
    title: "Content Creation",
    desc: "High-quality, scroll-stopping visuals and copy tailored strictly to your brand voice.",
    icon: <Palette className="w-8 h-8 text-primary" />
  },
  {
    title: "Paid Advertising",
    desc: "Targeted ad campaigns across platforms to maximize ROI and scale your business.",
    icon: <Megaphone className="w-8 h-8 text-primary" />
  },
  {
    title: "Brand Strategy",
    desc: "Comprehensive market positioning to ensure you stand out in a crowded digital space.",
    icon: <Lightbulb className="w-8 h-8 text-primary" />
  },
  {
    title: "Influencer Marketing",
    desc: "Strategic partnerships with creators to amplify your reach and build authentic trust.",
    icon: <Star className="w-8 h-8 text-primary" />
  },
  {
    title: "Analytics & Reporting",
    desc: "Data-driven insights to measure success and continuously optimize performance.",
    icon: <ChartBarBig className="w-8 h-8 text-primary" />
  }
];

import ScrollReveal from "./ScrollReveal";

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-12">
      <div className="overflow-hidden py-8" ref={emblaRef}>
        <ScrollReveal stagger className="flex -ml-4">
          {services.map((service, index) => (
            <div key={index} className="flex-none w-full md:w-1/3 pl-4 min-w-0">
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-primary p-8 transition-all duration-500 transform hover:-translate-y-3 group flex flex-col">
                <div className="w-16 h-16 bg-pale-rose rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">{service.title}</h3>
                <p className="font-sans text-text-gray mb-8 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <a href="#contact" className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors mt-auto">
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>

      <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:flex" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg justify-center items-center text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:flex" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-4 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === selectedIndex ? 'bg-primary' : 'bg-primary/20'}`}
            aria-label={`Go to slide base ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
