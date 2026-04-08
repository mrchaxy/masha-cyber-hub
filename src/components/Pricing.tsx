const prices = [
  { service: "Internet Browsing", price: "KES 1/min", note: "High-speed access" },
  { service: "B/W Printing", price: "KES 10/page", note: "A4 standard" },
  { service: "Color Printing", price: "KES 30/page", note: "A4 full color" },
  { service: "Photocopying", price: "KES 5/page", note: "Single-sided" },
  { service: "Scanning", price: "KES 20/page", note: "Digital copy" },
  { service: "Passport Photo", price: "KES 200", note: "4 photos" },
  { service: "CV/Document Typing", price: "From KES 200", note: "Per document" },
  { service: "CV/Document Typing", price: "From KES 200", note: "Per document" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-heading uppercase tracking-[0.3em] text-primary mb-4 block">Affordable Rates</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Our Prices</h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-primary/10 bg-card/60 backdrop-blur-sm overflow-hidden">
          {prices.map((item, i) => (
            <div key={item.service} className={`flex items-center justify-between p-5 ${i !== prices.length - 1 ? 'border-b border-border/50' : ''} hover:bg-primary/5 transition-colors`}>
              <div>
                <span className="font-heading text-sm font-bold text-foreground">{item.service}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{item.note}</span>
              </div>
              <span className="font-heading text-sm text-primary font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
