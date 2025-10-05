import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <img
                src={profileImage}
                alt="Anik Bhaumik"
                className="relative rounded-2xl w-full aspect-square object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm <span className="text-primary font-semibold">Anik</span> — a Data Science student 
                passionate about web development, automation, and creative problem solving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love building beautiful, functional, and meaningful digital experiences. 
                My journey combines analytical thinking with creative execution to deliver 
                solutions that make a difference.
              </p>

              <div className="flex gap-4 pt-4 flex-wrap">
                <a
                  href="/anikbhaumik_resume.pdf"
                  download="anikbhaumik_resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover:glow-border transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
