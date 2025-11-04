import { Card } from "@/components/ui/card";
import { Truck, Shield, Package, Leaf } from "lucide-react";

const Exports = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Nationwide Distribution",
      description: "Comprehensive logistics network connecting farms to markets across India with efficient routing and timely delivery.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cold-Chain Logistics",
      description: "Temperature-controlled transportation ensuring mangoes reach buyers in perfect condition, preserving freshness and flavor.",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Quality Certification",
      description: "Every crate meets strict quality standards with certified packaging, ensuring food safety and export compliance.",
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Seasonal Varieties",
      description: "Exporting premium varieties including Alphonso, Kesar, Dasheri, Totapuri, and more throughout the season.",
    },
  ];

  return (
    <section id="exports" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Export Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over the years, we've built strong relationships with mango farmers across India and developed a reliable 
            distribution network that reaches 15+ major cities. Our team personally oversees every shipment to ensure 
            the mangoes arrive in perfect condition, maintaining the freshness and flavor that our customers love.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-card hover:shadow-xl transition-all hover:-translate-y-1 fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exports;
