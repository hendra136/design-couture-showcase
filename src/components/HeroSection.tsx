import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroImages = [
  {
    id: 1,
    title: "Menswear Collection 2024",
    subtitle: "Precision tailoring meets modern elegance",
  },
  {
    id: 2,
    title: "Womenswear Essentials",
    subtitle: "Timeless designs for the contemporary woman",
  },
  {
    id: 3,
    title: "Performance Sportswear",
    subtitle: "Function and style in perfect harmony",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-deep-black">
      {/* Background Image Slides */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Placeholder gradient - will be replaced with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-primary/10" />
            <div className="absolute inset-0 overlay-gradient" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 text-balance">
              Menciptakan Gaya.
              <br />
              Mendefinisikan Kualitas.
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 font-body mb-10 max-w-2xl mx-auto">
              Menampilkan hasil desain apparel saya selama berkarir di industri fashion profesional.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 navy-glow">
              <Link to="/portfolio">Jelajahi Koleksi Eksklusif</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
