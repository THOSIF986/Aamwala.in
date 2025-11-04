import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mangoes.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(123, 79, 34, 0.5), rgba(36, 100, 40, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center fade-in-up">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Delivering the Taste of<br />
          <span className="text-primary">India's Finest Mangoes</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          From our farms to your home — across India and beyond
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("exports")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-soft hover:shadow-xl transition-all hover:scale-105"
          >
            Explore Exports
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="secondary"
            className="font-semibold px-8 py-6 text-lg shadow-soft hover:shadow-xl transition-all hover:scale-105"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;