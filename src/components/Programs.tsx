import { Button } from "@/components/ui/button";
import { Check, BookOpen, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Spoken English + Grammar",
    subtitle: "Foundation Course",
    description: "Build a solid foundation with everyday vocabulary, pronunciation, and storytelling skills.",
    features: [
      "Grammar fundamentals",
      "Pronunciation correction",
      "Vocabulary building",
      "Daily conversation practice",
      "Storytelling techniques",
    ],
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Career Accelerator",
    subtitle: "Interview & Professional Skills",
    description: "Master interviews, meetings, and professional communication to accelerate your career.",
    features: [
      "Interview mastery",
      "Resume & LinkedIn review",
      "Meeting scripts",
      "Email writing",
      "Presentation skills",
    ],
    color: "secondary",
    popular: true,
  },
  {
    icon: GraduationCap,
    title: "IELTS / Business English",
    subtitle: "Advanced Program",
    description: "Prepare for international exams and master advanced business communication.",
    features: [
      "IELTS exam preparation",
      "Writing task reviews",
      "Speaking practice",
      "Business vocabulary",
      "Negotiation skills",
    ],
    color: "accent",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Choose Your Path to Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're just starting or looking to reach new heights, we have a program designed for your journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-2xl border transition-all duration-300 shadow-card hover:shadow-glow hover:-translate-y-1 ${
                program.popular ? "border-primary" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gradient-hero text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  program.color === "primary"
                    ? "gradient-hero"
                    : program.color === "secondary"
                    ? "gradient-secondary"
                    : "bg-accent"
                }`}
              >
                <program.icon className={`w-8 h-8 ${program.color === "accent" ? "text-accent-foreground" : "text-primary-foreground"}`} />
              </div>

              {/* Content */}
              <span className="text-sm text-muted-foreground font-medium">{program.subtitle}</span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={program.popular ? "hero" : "outline"}
                className="w-full gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
