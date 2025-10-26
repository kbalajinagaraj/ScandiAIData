import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle, Zap, Globe, Clock } from "lucide-react";
import { useLocation } from "wouter";

export function AIConsultation() {
  const [, setLocation] = useLocation();

  const benefits = [
    { icon: Zap, text: "Instant expert responses powered by AI" },
    { icon: Globe, text: "Multi-language support (English, Hindi, regional languages)" },
    { icon: Clock, text: "24/7 availability for compliance queries" },
    { icon: CheckCircle, text: "Trained on DPDP Act, IT Act & Indian legal frameworks" },
  ];

  const sampleQueries = [
    "How to implement DPDP consent management?",
    "What are cross-border data transfer requirements?",
    "How to handle data breach notifications?",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Consultation</span>
            </div>

            <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground">
              Get Expert AI Consultation in Minutes
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary AI has been trained on comprehensive Indian legal acts including DPDP, IT Act, and regulatory frameworks to provide instant, accurate compliance guidance.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <Button 
              size="lg" 
              data-testid="button-try-ai-consultation"
              onClick={() => setLocation("/contact")}
            >
              Try AI Consultation
            </Button>
          </div>

          <div>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">DPDP AI Assistant</h4>
                    <p className="text-xs text-muted-foreground">Always ready to help</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {sampleQueries.map((query, index) => (
                    <div key={index} className="space-y-2" data-testid={`sample-query-${index}`}>
                      <div className="bg-accent/50 rounded-lg p-4 text-sm text-foreground">
                        {query}
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <div className="flex items-start space-x-2">
                          <Bot className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-muted-foreground">
                            AI analyzing your query and providing expert guidance based on DPDP Act...
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Powered by our in-house AI trained on Indian legal compliance frameworks
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
