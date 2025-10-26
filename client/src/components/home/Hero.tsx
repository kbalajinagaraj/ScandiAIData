import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [, setLocation] = useLocation();
  const [counts, setCounts] = useState({
    compliance: 0,
    assessments: 0,
    advisors: 0,
    automation: 0,
  });

  useEffect(() => {
    const targets = {
      compliance: 100,
      assessments: 500,
      advisors: 50,
      automation: 100,
    };

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    const increments = {
      compliance: targets.compliance / steps,
      assessments: targets.assessments / steps,
      advisors: targets.advisors / steps,
      automation: targets.automation / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        compliance: Math.min(Math.floor(increments.compliance * currentStep), targets.compliance),
        assessments: Math.min(Math.floor(increments.assessments * currentStep), targets.assessments),
        advisors: Math.min(Math.floor(increments.advisors * currentStep), targets.advisors),
        automation: Math.min(Math.floor(increments.automation * currentStep), targets.automation),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Privacy Compliance Globally", value: counts.compliance, suffix: "+" },
    { label: "Total Assessments", value: counts.assessments, suffix: "+" },
    { label: "Expert Privacy Advisors", value: counts.advisors, suffix: "+" },
    { label: "Automated Privacy Tools", value: counts.automation, suffix: "%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/20">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Compliance Solutions</span>
          </div>

          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-tight">
            Ensuring Compliance with{" "}
            <span className="text-primary">Expert Consulting</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Privacy tools designed for empowering organizations. Get expert AI consultancy services powered by our in-house AI trained for DPDP and Indian legal acts in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group" 
              data-testid="button-hero-get-started"
              onClick={() => setLocation("/contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              data-testid="button-hero-explore-products"
              onClick={() => setLocation("/products")}
            >
              Explore Our Products
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all"
              data-testid={`stat-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
