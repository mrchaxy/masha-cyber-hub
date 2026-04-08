import { Monitor, Printer, Gamepad2, Wifi, Camera, FileText, Globe, Headphones } from "lucide-react";

const services = [
  { icon: Monitor, title: "Computer Access", desc: "High-performance PCs with latest software for all your needs", size: "col-span-2 row-span-2" },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Lightning fast 100Mbps connection", size: "col-span-1 row-span-1" },
  { icon: Printer, title: "Printing & Scanning", desc: "Color & B/W printing, scanning, photocopying", size: "col-span-1 row-span-1" },
  { icon: Gamepad2, title: "Gaming Zone", desc: "Pro gaming rigs with top titles", size: "col-span-1 row-span-2" },
  { icon: Camera, title: "Passport Photos", desc: "Quick ID & passport photo services", size: "col-span-1 row-span-1" },
  { icon: FileText, title: "Document Services", desc: "CV writing, typing, formatting", size: "col-span-1 row-span-1" },
  { icon: Globe, title: "Online Services", desc: "M-Pesa, NTSA, eCitizen, registrations", size: "col-span-2 row-span-1" },
  { icon: Headphones, title: "Tech Support", desc: "Troubleshooting & device repairs", size: "col-span-1 row-span-1" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-heading uppercase tracking-[0.3em] text-primary mb-4 block">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Our Services</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[160px]">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`${service.size} group relative p-6 rounded-xl border border-primary/10 bg-card/60 backdrop-blur-sm hover:glow-border transition-all duration-500 flex flex-col justify-end overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-primary rounded-xl blur-3xl scale-150 -z-10" style={{ opacity: 0.05 }} />
              
              <service.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
