import { User, Calendar, MapPin, Headphones, Target, Clock } from "lucide-react";

const features = [
  {
    icon: User,
    title: "1:1 Personal Attention",
    description: "No large classes. Get dedicated focus on your specific challenges and goals.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Classes that fit your busy life. Morning, evening, or weekend slots available.",
  },
  {
    icon: MapPin,
    title: "Offline & Online",
    description: "Learn in-person in Kolkata or join from anywhere in India via video call.",
  },
  {
    icon: Headphones,
    title: "Native Accent Training",
    description: "Reduce mother tongue influence and develop clear, professional pronunciation.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Custom curriculum designed around your career goals and timeline.",
  },
  {
    icon: Clock,
    title: "7-Day Momentum Plan",
    description: "See real improvement in just one week with our structured approach.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Learn With Smile Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just another English course. We're your partner in building lasting confidence and career success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
