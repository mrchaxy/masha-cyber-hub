import heroImg from "@/assets/hero-cyber.jpg";
import { Monitor, Wifi, Printer, Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="MASHA CYBER interior" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(239 85% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(239 85% 60% / 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-heading text-primary uppercase tracking-widest">Now Open</span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6">
          <span className="block text-foreground">MASHA</span>
          <span className="block gradient-primary bg-clip-text text-transparent glow-text">CYBER</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Your ultimate digital hub — high-speed internet, gaming, printing, 
          and all your tech needs under one roof.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#services" className="gradient-primary px-8 py-4 rounded-lg font-heading text-sm uppercase tracking-widest text-primary-foreground glow-box transition-all hover:scale-105">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-4 rounded-lg font-heading text-sm uppercase tracking-widest border border-primary/30 text-foreground hover:bg-primary/10 transition-all">
            Visit Us
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Monitor, label: "Computers", value: "3" },
            { icon: Wifi, label: "Speed", value: "Fast" },
            { icon: Printer, label: "Printing", value: "24/7" },
            { icon: Gamepad2, label: "Gaming", value: "Pro Setup" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-xl font-heading font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
