import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹1,000",
    period: "/month",
    description: "Perfect for beginners building English foundations",
    features: [
      "8 sessions/month (2 per week)",
      "Grammar fundamentals",
      "Basic conversation practice",
      "WhatsApp support",
      "Progress tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹1,250",
    period: "/month",
    description: "Ideal for working professionals and job seekers",
    features: [
      "12 sessions/month (3 per week)",
      "Interview preparation",
      "Resume & email review",
      "Meeting scripts",
      "Priority WhatsApp support",
      "Mock interviews",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1,500",
    period: "/month",
    description: "Comprehensive program for ambitious achievers",
    features: [
      "16 sessions/month (4 per week)",
      "All Professional features",
      "IELTS preparation",
      "Business English",
      "Presentation coaching",
      "Direct phone support",
      "Career guidance",
    ],
    cta: "Get Started",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Invest in Your Future
          </h2>
          <p className="text-muted-foreground text-lg">
            Affordable plans designed to deliver maximum value. Start with a free first session.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-2xl border transition-all duration-300 shadow-card hover:-translate-y-1 ${
                plan.popular ? "border-primary scale-105 lg:scale-110" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gradient-hero text-primary-foreground text-sm font-semibold rounded-full whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            💰 <span className="font-semibold text-foreground">100% Satisfaction Guarantee</span> — Not happy after your first week? Get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
