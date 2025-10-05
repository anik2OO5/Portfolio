import { Award } from "lucide-react";

const certificates = [
  { title: "Python for Data Science", issuer: "Coursera", year: "2024" },
  { title: "Web Development Bootcamp", issuer: "Udemy", year: "2023" },
  { title: "Machine Learning Foundations", issuer: "AWS Academy", year: "2024" },
  { title: "React Advanced Patterns", issuer: "Frontend Masters", year: "2024" },
  { title: "Database Design & SQL", issuer: "Stanford Online", year: "2023" },
  { title: "Cloud Computing Essentials", issuer: "Google Cloud", year: "2024" },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          Certificates
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 group hover:glow-border transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
