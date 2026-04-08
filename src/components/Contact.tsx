import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-heading uppercase tracking-[0.3em] text-primary mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Find Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: "Location", detail: "Masha Area, Nairobi", sub: "Near the main stage" },
            { icon: Phone, title: "Call Us", detail: "+254 700 000 000", sub: "Mon-Sat, 7am-10pm" },
            { icon: Clock, title: "Hours", detail: "7:00 AM - 10:00 PM", sub: "Monday to Saturday" },
            { icon: MessageCircle, title: "WhatsApp", detail: "Chat with us", sub: "Quick responses" },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-primary/10 bg-card/60 backdrop-blur-sm text-center hover:glow-border transition-all duration-300">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-foreground">{c.detail}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm glow-box">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ready to get connected?</h3>
            <p className="text-muted-foreground text-sm mb-6">Walk in today or call to reserve your spot.</p>
            <a href="tel:+254700000000" className="gradient-primary px-8 py-3 rounded-lg font-heading text-sm uppercase tracking-widest text-primary-foreground inline-block hover:scale-105 transition-transform">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
