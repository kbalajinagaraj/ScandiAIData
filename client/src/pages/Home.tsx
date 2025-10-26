import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProductsHighlight } from "@/components/home/ProductsHighlight";
import { AIConsultation } from "@/components/home/AIConsultation";
import { ClientShowcase } from "@/components/home/ClientShowcase";
import { Solutions360 } from "@/components/home/Solutions360";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <ProductsHighlight />
      <AIConsultation />
      <ClientShowcase />
      <Solutions360 />
    </div>
  );
}
