import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Brain, Shield, Network } from "lucide-react";

export function ProductsHighlight() {
  const [, setLocation] = useLocation();

  const products = [
    {
      icon: Brain,
      name: "AI Compliance Assistant",
      tagline: "Your 24/7 Virtual Legal Expert",
      description: "Real-time DPDP query resolution with natural language processing and contextual industry recommendations.",
    },
    {
      icon: Shield,
      name: "Smart Consent Intelligence",
      tagline: "Beyond Basic Consent Management",
      description: "AI-powered lifecycle automation with predictive analytics and behavioral insights for consent optimization.",
    },
    {
      icon: Network,
      name: "Privacy Risk Predictor",
      tagline: "Proactive Compliance Protection",
      description: "ML-powered risk detection that anticipates compliance issues before they become critical problems.",
    },
  ];

  return (
    <section className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">AI-Powered Products</h2>
          <h3 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            Elevate Your Data Privacy with Intelligent Automation
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our in-house AI trained for DPDP and Indian legal acts delivers expert consultancy in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="hover-elevate transition-all border-2" data-testid={`product-highlight-${index}`}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="font-serif font-semibold text-2xl text-foreground mb-2">{product.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="group" 
            data-testid="button-explore-all-products"
            onClick={() => setLocation("/products")}
          >
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
