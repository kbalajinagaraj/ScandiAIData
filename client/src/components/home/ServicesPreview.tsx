import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, FileCheck, Users, Shield, GraduationCap, FileText } from "lucide-react";

export function ServicesPreview() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: FileCheck,
      title: "Gap Assessment Review",
      description: "Detailed evaluation and expert guidance to help your business meet DPDP compliance requirements with minimal disruption.",
    },
    {
      icon: Users,
      title: "Consulting, Advisory & Audit",
      description: "Complete support to build strong privacy frameworks and customized policies ensuring legal compliance.",
    },
    {
      icon: Shield,
      title: "Data Protection Officer as a Service",
      description: "Turn DPO requirements into strategic advantage, enhancing your data protection framework and building stakeholder trust.",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Customized training focusing on practical aspects of DPDP Act compliance with role-based modules.",
    },
    {
      icon: FileText,
      title: "Contract Review & DPA",
      description: "Ensure compliance when sharing personal data with third parties through expert contract review services.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Our Services</h2>
          <h3 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            Helping Businesses Navigate Data Privacy & Compliance with Ease
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your organization's unique compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all group" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl text-foreground mb-3">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="group" 
            data-testid="button-learn-more-services"
            onClick={() => setLocation("/services")}
          >
            Learn More About Our Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
