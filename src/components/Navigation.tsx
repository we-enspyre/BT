import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleBookingRedirect = () => {
    window.open("https://finecut.planway.com/", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-serif font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("hero")}
          >
            FineCut
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="nav-link text-foreground hover:text-primary font-medium"
            >
              Forside
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-foreground hover:text-primary font-medium"
            >
              Behandlinger
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link text-foreground hover:text-primary font-medium"
            >
              Om os
            </button>
            <Button
              onClick={handleBookingRedirect}
              variant="hero"
              size="sm"
            >
              Book tid
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={handleBookingRedirect}
              variant="hero"
              size="sm"
            >
              Book tid
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
