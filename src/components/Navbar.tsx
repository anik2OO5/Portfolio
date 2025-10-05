import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
    >
      <div className="glass rounded-full px-6 py-3 flex gap-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === link.href.replace("#", "")
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.name}
            {activeSection === link.href.replace("#", "") && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full glow-border" />
            )}
            <span
              className={`absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 transition-transform duration-300 origin-center ${
                activeSection !== link.href.replace("#", "") ? "group-hover:scale-x-100" : ""
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};
