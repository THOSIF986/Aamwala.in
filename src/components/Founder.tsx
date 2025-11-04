import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Founder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by passion, experience, and a vision to revolutionize the mango industry
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-card hover:shadow-xl transition-all fade-in-up bg-card p-8 md:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  ARIF PASHA
                </h3>
                <p className="text-xl text-primary font-semibold mb-6">
                  Founder & Visionary
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-primary mb-3" />
                <p className="text-foreground font-medium italic leading-relaxed mb-3">
                  "Our family has been growing and exporting mangoes for over two decades. Every mango we send carries 
                  our commitment to quality and the love we have for this incredible fruit. With our new quick-commerce 
                  platform, we're bringing that same care and attention directly to your home."
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — Arif Pasha
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Leadership Team
                </h4>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <Card className="p-6 text-center shadow-card bg-background">
                    <h5 className="text-xl font-bold text-secondary mb-2">
                      ASIF PASHA
                    </h5>
                    <p className="text-primary font-semibold mb-3">
                      Co-Founder
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Leading strategic operations and nationwide expansion initiatives
                    </p>
                  </Card>
                  <Card className="p-6 text-center shadow-card bg-background">
                    <h5 className="text-xl font-bold text-secondary mb-2">
                      THOSIF PASHA
                    </h5>
                    <p className="text-primary font-semibold mb-3">
                      Co-Founder
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Driving innovation in logistics and quick-commerce technology
                    </p>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto">
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <p className="text-3xl font-bold text-secondary mb-1">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <p className="text-3xl font-bold text-secondary mb-1">15+</p>
                  <p className="text-sm text-muted-foreground">Cities Served</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
