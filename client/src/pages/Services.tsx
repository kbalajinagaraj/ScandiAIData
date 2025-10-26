import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FileCheck, Users, Shield, GraduationCap, FileText, CheckCircle2 } from "lucide-react";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: FileCheck,
      title: "Gap Assessment Review",
      description: "The Digital Personal Data Protection Act (DPDPA) requires organizations to be well-prepared. Our Gap Assessment Review offers a detailed evaluation and expert guidance to help your business meet compliance requirements with minimal disruption.",
      keyBenefits: [
        "Comprehensive evaluation of current compliance status",
        "Identification of gaps and vulnerabilities",
        "Prioritized action plan with timelines",
        "Expert recommendations tailored to your business",
        "Minimal disruption to ongoing operations",
        "Clear roadmap to DPDP compliance",
      ],
    },
    {
      icon: Users,
      title: "Consulting, Advisory & Audit",
      description: "We provide complete support to help your business meet DPDPA requirements. Our expertise includes building strong privacy frameworks and creating customized policies to ensure legal compliance.",
      keyBenefits: [
        "Strong privacy framework development",
        "Customized policy creation and implementation",
        "Regular compliance audits and assessments",
        "Proactive organizational controls",
        "IT security controls implementation",
        "Risk mitigation strategies",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection Officer as a Service",
      description: "In today's data-driven world, organizations face growing pressure to protect personal data. The DPDPA requires appointing a Data Protection Officer (DPO). Our DPO as a Service turns this requirement into a strategic advantage.",
      keyBenefits: [
        "Experienced DPO professionals on-demand",
        "Enhanced corporate governance",
        "Strengthened data protection framework",
        "Stakeholder trust building",
        "Cost-effective compliance solution",
        "Continuous expert oversight",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training Programs for DPDP Compliance",
      description: "Our training program is customized to your organization's needs, focusing on practical aspects of DPDP Act compliance. We cover all key topics including personal data policies, processing grounds, and security protocols.",
      keyBenefits: [
        "Role-based customized training modules",
        "Personal data policies and processing grounds",
        "Data principal rights management",
        "Risk assessment methodologies",
        "Cross-border data transfer protocols",
        "Security policies and breach notifications",
      ],
    },
    {
      icon: FileText,
      title: "Contract Review & Data Processing Agreements",
      description: "Our Contract Review and Data Processing Agreement services ensure your organization complies with the DPDP Act when sharing personal data with third parties. We help draft and review agreements that protect personal data.",
      keyBenefits: [
        "Comprehensive contract compliance review",
        "Data Processing Agreement drafting",
        "Third-party compliance verification",
        "Risk assessment for data sharing",
        "Required provisions implementation",
        "Data Principal rights protection",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-6">
              Expert Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Helping businesses navigate data privacy and compliance with ease through comprehensive, tailored solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden border-2" data-testid={`service-detail-${index}`}>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-1 bg-primary/5 p-8 lg:p-12 flex flex-col items-center justify-center text-center border-r border-border">
                        <div className="w-20 h-20 rounded-xl bg-primary flex items-center justify-center mb-4">
                          <Icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                        <h3 className="font-serif font-semibold text-2xl text-foreground mb-2">
                          {service.title}
                        </h3>
                      </div>

                      <div className="lg:col-span-2 p-8 lg:p-12 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Key Benefits</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.keyBenefits.map((benefit, bIndex) => (
                              <div key={bIndex} className="flex items-start space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button 
                          data-testid={`button-learn-more-${index}`}
                          onClick={() => setLocation("/contact")}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Ensure Your Compliance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts guide you through your DPDP compliance journey
          </p>
          <Button 
            size="lg" 
            data-testid="button-get-started-services"
            onClick={() => setLocation("/contact")}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
