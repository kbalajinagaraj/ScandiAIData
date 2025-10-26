import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower organizations with AI-driven compliance solutions that transform regulatory requirements into competitive advantages.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading provider of intelligent compliance automation in India, setting new standards for data privacy excellence.",
    },
    {
      icon: Award,
      title: "Our Expertise",
      description: "Deep understanding of DPDP Act, IT Act, and Indian legal frameworks combined with cutting-edge AI technology.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "50+ expert privacy advisors and AI specialists dedicated to your compliance success.",
    },
  ];

  const stats = [
    { value: "100+", label: "Privacy Compliance Projects Globally" },
    { value: "500+", label: "Total Assessments Completed" },
    { value: "50+", label: "Expert Privacy Advisors" },
    { value: "100%", label: "Automated Privacy Tools" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-6">
              About DPDP Experts
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading the future of compliance with AI-powered solutions designed for the Indian market
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DPDP Experts is a pioneering compliance consulting firm specializing in AI-powered privacy solutions. We combine deep regulatory expertise with cutting-edge artificial intelligence to deliver unprecedented efficiency and accuracy in compliance management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary AI has been trained on comprehensive Indian legal frameworks including the Digital Personal Data Protection Act (DPDP), IT Act, and related regulatory requirements. This enables us to provide instant, accurate guidance while maintaining the highest standards of professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-elevate transition-all" data-testid={`value-card-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-12 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-about-${index}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-6 text-center">
            Our Commitment
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              We are committed to making compliance accessible, efficient, and strategic. Our AI-powered tools don't replace human expertise—they amplify it, allowing our clients to focus on what matters most: building trust with their customers and stakeholders.
            </p>
            <p className="text-lg">
              Every solution we develop is grounded in deep legal expertise and informed by real-world compliance challenges. We continuously update our AI models to reflect the latest regulatory changes, ensuring our clients stay ahead of evolving requirements.
            </p>
            <p className="text-lg">
              Partner with us to transform your compliance operations from a cost center into a competitive advantage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
