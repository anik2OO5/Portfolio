import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Prof. A. Sen",
    role: "Mentor, TMSL",
    quote: "Anik's curiosity and creativity make him stand out — he learns fast and builds with purpose.",
  },
  {
    name: "R. Mukherjee",
    role: "Project Teammate",
    quote: "A sharp mind with great humor — Anik balances logic with innovation beautifully.",
  },
  {
    name: "Dr. S. Dasgupta",
    role: "Course Instructor",
    quote: "Exceptional dedication and problem-solving skills. Anik consistently delivers quality work.",
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          Recommendations
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                "{currentReview.quote}"
              </p>
              
              <div>
                <p className="font-semibold text-lg">{currentReview.name}</p>
                <p className="text-muted-foreground">{currentReview.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 glass rounded-full hover:glow-border transition-all duration-300 hover:scale-110"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8 glow-border"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 glass rounded-full hover:glow-border transition-all duration-300 hover:scale-110"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
