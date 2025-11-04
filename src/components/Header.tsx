import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary shadow-lg py-3"
          : "bg-secondary/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary-foreground">
          Aam Wala
        </h1>
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-secondary-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-secondary-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("exports")}
            className="text-secondary-foreground hover:text-primary transition-colors font-medium"
          >
            Exports
          </button>
          <button
            onClick={() => scrollToSection("quick-commerce")}
            className="text-secondary-foreground hover:text-primary transition-colors font-medium"
          >
            Next Step
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            size="sm"
            className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contact
          </Button>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="md:hidden text-secondary-foreground font-semibold"
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
