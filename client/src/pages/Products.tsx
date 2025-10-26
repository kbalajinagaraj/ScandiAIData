import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Brain, Shield, GraduationCap, FileSearch, Network, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Products() {
  const [, setLocation] = useLocation();

  const products = [
    {
      icon: Brain,
      name: "AI Compliance Assistant",
      tagline: "Your 24/7 Virtual Legal Expert",
      description: "Revolutionize your compliance workflow with our AI-powered assistant trained on DPDP and comprehensive Indian legal frameworks. Get instant, accurate answers to complex compliance queries in natural language.",
      features: [
        "Real-time DPDP query resolution with contextual understanding",
        "Natural language processing for legal interpretation",
        "24/7 availability for instant compliance guidance",
        "Multi-language support (English, Hindi, 10+ regional languages)",
        "Contextual recommendations based on industry verticals",
        "Integration with existing compliance management systems",
        "Automated documentation and audit trail generation",
        "Continuous learning from regulatory updates",
      ],
      useCases: [
        "Instant compliance query resolution for legal teams",
        "Training support for compliance officers",
        "Real-time guidance during data processing decisions",
      ],
      imagePlaceholder: "AI-assistant-dashboard.png",
    },
    {
      icon: Shield,
      name: "Smart Consent Intelligence Platform",
      tagline: "Beyond Basic Consent Management",
      description: "Transform consent management from a compliance checkbox into a strategic advantage. Our AI-powered platform provides predictive insights and behavioral analytics to optimize your consent lifecycle.",
      features: [
        "AI-powered consent lifecycle automation and tracking",
        "Predictive consent expiry alerts with renewal suggestions",
        "Behavioral analytics for consent optimization",
        "Automated consent audit trails and compliance reporting",
        "Seamless integration with CRM and ERP systems",
        "Multi-channel consent capture (web, mobile, offline)",
        "Granular consent preferences management",
        "Real-time consent status dashboard with analytics",
      ],
      useCases: [
        "E-commerce platforms managing customer preferences",
        "Healthcare organizations tracking patient consents",
        "Financial institutions with complex consent requirements",
      ],
      imagePlaceholder: "consent-platform-interface.png",
    },
    {
      icon: AlertCircle,
      name: "Privacy Risk Predictor",
      tagline: "Proactive Compliance Protection",
      description: "Stay ahead of compliance risks with machine learning-powered risk assessment. Our AI analyzes your data processing activities and predicts potential compliance issues before they become critical.",
      features: [
        "Machine learning-based risk scoring and prioritization",
        "Automated vulnerability detection across data workflows",
        "Real-time compliance monitoring dashboard",
        "Predictive analytics for regulatory changes impact",
        "Customizable risk thresholds per business unit",
        "Automated risk remediation recommendations",
        "Continuous monitoring and alerting system",
        "Historical risk trend analysis and reporting",
      ],
      useCases: [
        "Enterprise risk management and compliance teams",
        "Organizations with complex data processing operations",
        "Companies preparing for regulatory audits",
      ],
      imagePlaceholder: "risk-dashboard-analytics.png",
    },
    {
      icon: FileSearch,
      name: "Intelligent Document Analyzer",
      tagline: "AI-Driven Contract Intelligence",
      description: "Automate contract review and compliance gap identification with advanced NLP. Our AI analyzes agreements, extracts key clauses, and identifies DPDP compliance issues instantly.",
      features: [
        "AI-driven contract clause extraction and analysis",
        "Automated DPDP compliance gap identification in agreements",
        "Bulk document processing with advanced NLP",
        "Redlining suggestions for non-compliant clauses",
        "Version control and change tracking",
        "Template library with pre-approved clauses",
        "Collaborative review workflows with stakeholders",
        "Export compliance reports and summaries",
      ],
      useCases: [
        "Legal teams reviewing vendor contracts",
        "Procurement departments assessing supplier agreements",
        "Compliance officers auditing existing contracts",
      ],
      imagePlaceholder: "document-analyzer-interface.png",
    },
    {
      icon: GraduationCap,
      name: "Adaptive Training Engine",
      tagline: "Personalized Compliance Learning",
      description: "Transform compliance training from a checkbox exercise into an engaging, personalized learning experience. Our AI adapts to each employee's role, pace, and knowledge level.",
      features: [
        "Personalized learning paths based on role and department",
        "AI-generated compliance scenarios and simulations",
        "Gamified learning modules with progress tracking",
        "Automated compliance certification management",
        "Real-time knowledge assessment and gap analysis",
        "Interactive quizzes with adaptive difficulty",
        "Microlearning modules for busy professionals",
        "Integration with HR and LMS systems",
      ],
      useCases: [
        "Organizations onboarding new employees",
        "Annual compliance training for all staff",
        "Specialized training for data processing teams",
      ],
      imagePlaceholder: "training-platform-dashboard.png",
    },
  ];

  const iconMap: { [key: string]: any } = {
    Brain,
    Shield,
    AlertCircle: FileSearch,
    FileSearch,
    GraduationCap,
    Network,
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-6">
              AI-Powered Compliance Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Innovative solutions powered by our in-house AI trained specifically for DPDP and Indian legal compliance frameworks. Transform your compliance operations with intelligent automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
                data-testid={`product-section-${index}`}
              >
                <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                  <Card className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 border-2 flex items-center justify-center">
                    <CardContent className="p-12 text-center">
                      <Icon className="h-24 w-24 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Product Interface Preview</p>
                    </CardContent>
                  </Card>
                </div>

                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Product {index + 1}</span>
                    </div>
                    
                    <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-2">
                      {product.name}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Ideal Use Cases</h3>
                    <ul className="space-y-2">
                      {product.useCases.map((useCase, uIndex) => (
                        <li key={uIndex} className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span className="text-sm text-muted-foreground">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="group" 
                    data-testid={`button-explore-${index}`}
                    onClick={() => setLocation("/contact")}
                  >
                    Explore Product
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with our AI-powered products and experience the future of compliance management
          </p>
          <Button 
            size="lg" 
            data-testid="button-request-demo"
            onClick={() => setLocation("/contact")}
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
