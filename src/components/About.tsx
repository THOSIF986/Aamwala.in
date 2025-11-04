import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Aam Wala
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aam Wala is a family-run mango business with over 20 years of experience in the fruit export industry. 
            We're passionate about bringing the authentic taste of India's finest mangoes directly to families across the country 
            and around the world. As we grow, we're excited to expand into quick-commerce delivery to bring fresh mangoes 
            right to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8 shadow-card hover:shadow-xl transition-all fade-in-up">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Our Heritage</h3>
            <p className="text-muted-foreground leading-relaxed">
              For generations, our family has been deeply rooted in the mango trade, 
              understanding every nuance from cultivation to export. This rich heritage 
              forms the foundation of Aam Wala's commitment to quality and authenticity. 
              We bring tradition into the modern age, combining time-tested expertise 
              with innovative logistics and technology.
            </p>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-xl transition-all fade-in-up">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Key Facts</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>20+ years</strong> of family experience in fruit export operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span>Serving <strong>15+ major cities</strong> across India</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>Pan-India distribution network</strong> with cold-chain infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span>Certified quality standards and <strong>premium packaging</strong></span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
