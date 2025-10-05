import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "QR Code Scanner Web App",
    description: "A web-based QR code scanner using the device camera for real-time scanning.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Gym Management Application",
    description: "An app to manage gym memberships, track progress, and integrate fitness utilities.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio showcasing projects and achievements.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          Projects
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentProject.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">{currentProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={currentProject.liveUrl}
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={currentProject.githubUrl}
                  className="flex items-center gap-2 px-6 py-2.5 glass rounded-full font-medium hover:glow-border transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 glass rounded-full hover:glow-border transition-all duration-300 hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8 glow-border"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 glass rounded-full hover:glow-border transition-all duration-300 hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
