import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at TCS",
    content: "I was terrified of interviews. After just 3 months with Learn With Smile, I cracked interviews at 4 top companies. The personalized attention made all the difference!",
    rating: 5,
    image: "PS",
  },
  {
    name: "Rahul Gupta",
    role: "Marketing Manager",
    content: "My MTI was holding me back in client presentations. Now I speak with confidence and have received promotions because of my improved communication skills.",
    rating: 5,
    image: "RG",
  },
  {
    name: "Sneha Banerjee",
    role: "IELTS Score: 8.0",
    content: "Scored 8.0 in IELTS on my first attempt! The structured approach and constant feedback helped me achieve my dream of studying abroad.",
    rating: 5,
    image: "SB",
  },
  {
    name: "Amit Das",
    role: "Team Lead at Wipro",
    content: "I can now confidently lead meetings and give presentations. My career has transformed since joining Learn With Smile. Best investment I ever made!",
    rating: 5,
    image: "AD",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results from Real People
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of successful professionals who transformed their careers with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
