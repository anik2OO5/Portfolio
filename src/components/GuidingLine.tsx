import { useEffect, useState } from "react";

export const GuidingLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 w-0.5 h-full pointer-events-none z-40">
      {/* Background line with multiple fade points */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent" />
        {/* Dim zones at section centers */}
        <div className="absolute top-[10%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent via-background to-transparent" />
        <div className="absolute top-[30%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent via-background to-transparent" />
        <div className="absolute top-[50%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent via-background to-transparent" />
        <div className="absolute top-[70%] left-0 right-0 h-[15%] bg-gradient-to-b from-transparent via-background to-transparent" />
      </div>
      
      {/* Animated progress line with softer appearance */}
      <div
        className="absolute top-0 left-0 w-full transition-all duration-100 ease-out"
        style={{ 
          height: `${scrollProgress}%`,
          background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--primary)) 5%, hsl(var(--primary)) 95%, transparent 100%)'
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-glow-pulse shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
      </div>

      {/* Section markers with reduced opacity */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full" />
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full" />
    </div>
  );
};
