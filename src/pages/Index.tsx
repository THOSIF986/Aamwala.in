import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Exports from "@/components/Exports";
import QuickCommerce from "@/components/QuickCommerce";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Exports />
        <QuickCommerce />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
