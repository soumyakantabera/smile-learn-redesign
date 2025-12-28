import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Confident professional speaking in a meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground mb-6 animate-fade-up">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 1000+ Professionals</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Speak English with{" "}
            <span className="text-gradient">Confidence</span> & Land Your Dream Job
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Overcome interview fear, master fluent communication, and accelerate your career with personalized 1:1 English coaching from Kolkata's top trainers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <Users className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">1000+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <Award className="w-5 h-5" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">95%</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">4.9</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Student Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
