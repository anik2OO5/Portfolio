import { Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/anik2OO5", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anik-bhaumik-a4782a232/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://www.instagram.com/anik.bhaumik/", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Twitter, href: "https://x.com/anikbhaumik2005", label: "Twitter", color: "hover:text-blue-300" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <a
            href="mailto:contact@anikbhaumik.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 hover:scale-105 mb-16"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glass rounded-full transition-all duration-300 hover:scale-110 hover:glow-border ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
