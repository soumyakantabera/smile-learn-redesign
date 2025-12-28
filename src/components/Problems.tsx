import { AlertCircle, Frown, MessageSquareX, ThumbsDown } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Interview Fear",
    description: "Heart racing, mind going blank when facing interviewers? You're not alone.",
  },
  {
    icon: MessageSquareX,
    title: "Mother Tongue Influence",
    description: "Struggling with pronunciation and accent that affects your professional image?",
  },
  {
    icon: ThumbsDown,
    title: "Grammar Gaps",
    description: "Worried about making embarrassing mistakes in emails and conversations?",
  },
  {
    icon: AlertCircle,
    title: "Meeting Anxiety",
    description: "Unable to speak up in team meetings or present ideas confidently?",
  },
];

const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            We Understand Your Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Are These Holding You Back?
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't let these common struggles stop you from achieving your career goals. We've helped thousands overcome the same challenges.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-destructive/30 transition-all duration-300 shadow-soft hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            It's time to{" "}
            <span className="text-gradient">transform</span> these challenges into strengths.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
