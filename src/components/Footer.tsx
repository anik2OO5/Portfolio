import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
          © 2025 Anik Bhaumik | Built with 
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
          using React + Vite
        </p>
      </div>
    </footer>
  );
};
