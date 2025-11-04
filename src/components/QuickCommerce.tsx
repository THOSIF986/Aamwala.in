import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Zap, Clock, DollarSign } from "lucide-react";

const QuickCommerce = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-Time Vendor Tracking",
      description: "Know exactly where your mangoes are coming from with live vendor location updates.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Order Processing",
      description: "Orders confirmed in seconds through our smart platform connecting you with nearby vendors.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same-Day City Delivery",
      description: "Premium mangoes delivered to your doorstep within hours, not days.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with freshness guarantee. No hidden costs, just honest business.",
    },
  ];

  return (
    <section id="quick-commerce" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Next Step — Doorstep Mango Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We're building a platform to bring fresh mangoes directly to your doorstep within hours. 
            Our team is working hard to connect you with the best local vendors who share our commitment 
            to quality and freshness. Soon, you'll be able to order premium-grade mangoes through a simple 
            app and receive them while they're at their peak ripeness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-xl transition-all fade-in-up bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-secondary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickCommerce;
