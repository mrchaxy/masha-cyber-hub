import { Shield, Zap, Clock, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast & Reliable", desc: "Uninterrupted high-speed internet you can count on." },
  { icon: Shield, title: "Safe & Secure", desc: "Your data and privacy are always protected." },
  { icon: Clock, title: "Flexible Hours", desc: "Open early, close late — we work around your schedule." },
  { icon: Users, title: "Friendly Staff", desc: "Our team is always ready to help with any tech need." },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left */}
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.3em] text-primary mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">MASHA CYBER</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              MASHA CYBER is more than just an internet café. We are a one-stop digital service center 
              where students, professionals, and businesses come to get things done. 
              Whether you need to print documents, browse the web, or enjoy some gaming time — 
              we've got you covered with the best equipment and fastest connections.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="font-heading text-xs text-muted-foreground uppercase tracking-widest">Est. 2024</span>
            </div>
          </div>

          {/* Right - Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-primary/10 bg-card/60 backdrop-blur-sm hover:glow-border transition-all duration-300">
                <f.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
