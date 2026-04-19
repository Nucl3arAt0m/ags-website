"use client";

import { Mail, Phone, MapPin } from "lucide-react";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 bg-primary px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Col */}
        <ScrollReveal stagger className="space-y-12">
          <div>
            <h2 className="font-serif text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="font-sans text-soft-blush text-lg max-w-md">
              Ready to elevate your digital presence? Fill out the form, and our strategy team will reach out to you within 24 hours.
            </p>
          </div>
          
          <div className="space-y-8 stagger-container">
            {[
              { icon: <Mail className="w-6 h-6 text-soft-blush" />, label: "Email Us", value: "helloshashank@ags.com" },
              { icon: <Phone className="w-6 h-6 text-soft-blush" />, label: "Call Us", value: "+91 72083 99033" },
              { icon: <MapPin className="w-6 h-6 text-soft-blush" />, label: "Visit Us", value: <>Innovation Hub,<br/>Ozar(Mig), Nashik-422206</> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer transition-transform hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-primary-dark border border-white/10 flex items-center justify-center group-hover:bg-primary-mid group-hover:border-soft-blush/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-sans text-sm text-soft-blush/70 mb-1">{item.label}</p>
                  <p className="font-sans font-medium text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right Col: Form */}
        <ScrollReveal className="bg-primary-dark p-8 md:p-10 rounded-3xl border border-light-accent shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-soft-blush mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="w-full bg-primary border border-light-accent rounded-xl px-4 py-3 text-white placeholder:text-soft-blush/40 focus:outline-none focus:ring-2 focus:ring-soft-blush/50 focus:border-soft-blush transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-soft-blush mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="w-full bg-primary border border-light-accent rounded-xl px-4 py-3 text-white placeholder:text-soft-blush/40 focus:outline-none focus:ring-2 focus:ring-soft-blush/50 focus:border-soft-blush transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="service" className="block font-sans text-sm font-medium text-soft-blush mb-2">Service Interested In</label>
              <select 
                id="service" 
                className="w-full bg-primary border border-light-accent rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-soft-blush/50 focus:border-soft-blush transition-all duration-300 appearance-none"
              >
                <option value="">Select a service...</option>
                <option value="social">Social Media Management</option>
                <option value="content">Content Creation</option>
                <option value="ads">Paid Advertising</option>
                <option value="brand">Brand Strategy</option>
                <option value="influencer">Influencer Marketing</option>
                <option value="analytics">Analytics & Reporting</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-soft-blush mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-primary border border-light-accent rounded-xl px-4 py-3 text-white placeholder:text-soft-blush/40 focus:outline-none focus:ring-2 focus:ring-soft-blush/50 focus:border-soft-blush transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-primary font-bold py-4 rounded-xl hover:bg-transparent hover:text-white hover:border hover:border-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-2xl">
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
