import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
            Anik Bhaumik
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Data Science Student
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about web development, automation, and creative problem solving
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass text-foreground rounded-full font-medium hover:glow-border transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </a>
      </div>
    </section>
  );
};
