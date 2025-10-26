import { Card, CardContent } from "@/components/ui/card";
import { 
  FileCheck, Shield, FileText, GraduationCap, Users, 
  FileSearch, AlertCircle, Lock, Network, Database 
} from "lucide-react";

export function Solutions360() {
  const solutions = [
    { icon: FileCheck, title: "Consent Management Framework" },
    { icon: AlertCircle, title: "Risk & Mitigation" },
    { icon: FileSearch, title: "Processing Activity Assessments" },
    { icon: FileText, title: "Policy & Privacy Notice Framework" },
    { icon: Shield, title: "DPIA Methodology" },
    { icon: Users, title: "Principal Rights Management" },
    { icon: GraduationCap, title: "DPDPA Employee Awareness" },
    { icon: Lock, title: "Employee Compliance Agreement" },
    { icon: Network, title: "Data Processing Agreement" },
    { icon: Database, title: "Third-Party Consent Sharing" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            All-in-One, Stress-Free 360° Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by cutting-edge proprietary tools and expert consultation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-all cursor-pointer group"
                  data-testid={`solution-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xs font-medium text-foreground leading-tight">{solution.title}</h4>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/20">
              <span className="font-serif font-bold text-2xl text-primary">360°</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Complete Compliance Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
